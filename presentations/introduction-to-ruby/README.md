<!-- Remark.js style -->
<!--  class: middle, center -->  

# Introduction à Ruby

## Simon Thiboutôt

<p align='center'>
  <img alt='Ruby logo' width='100' src='./assets/images/ruby-logo.png'/>
</p>

---

# À propos de moi

Simon Thiboutôt

- Slack - @lilc4t
- Twitter - [@simonthiboutot](https://twitter.com/simonthiboutot)
- GitHut - [@masterT](https://github.com/masterT)

Dévelopeur Ruby on Rails chez [Kimoby](https://www.kimoby.com/) depuis 2014.

<p align='left'>
  <img alt='Kimoby logo' src='./assets/images/kimoby-logo.png'/>
</p>

Kimoby is a web-based communication platform that helps businesses instantly connect with their customers through texting messaging.

---

# À propos de Ruby

Créé en 1995 par le japonais [Yukihiro « Matz » Matsumoto](https://github.com/matz).

Inspiré de `Perl`, `Smalltalk`, `Eiffel`, `Ada` et `Lisp`.

Language interpréter.

Son but était de concevoir un language **le plus naturel possible** et non le plus simple possible.

Le paradigme de base est que **tout est un objet**.

La syntaxe est triviale, se rapprochant d’une phrase minimaliste en anglais.

---

# Conventions

- `UTF-8` comme encodage des fichiers source
- `2` espaces par niveau d'indentation (pas de tabulation)
- `snake_case` - méthodes/variables
- `CamelCase` - classes/modules
- `SCREAMING_SNAKE_CASE` - constantes

References
- [Rubocop ruby-style-guide](https://github.com/gdlx/ruby-style-guide/blob/master/README-frFR.md)
- [Airbnb Ruby Style Guide](https://github.com/airbnb/ruby/blob/master/README.md)

---

# Documentation

[https://ruby-doc.org/](https://ruby-doc.org/core-2.5.1/)

Documentation locale avec `ri`.

> `ri` is a CLI front end for the Ruby API reference. `ri` is a part of Ruby.

```shell
# Usage: `ri <target>`
# Ex:
ri String
ri String.equal?
```

---

# Variables

- `var` pourrait être une variable local
- `@var` est une variable d’instance
- `@@var` est une variable de classe
- `$var` est une variable global

```ruby
$stdout
=> #<IO:<STDOUT>>
```

---

# Méthodes

[Reference](https://ruby-doc.org/core-2.5.1/Method.html)

En Ruby les méthodes peuvent contenir certain caractères speciaux.

De manière générale une méthode qui ce termine par:

- `=` est un setter
- `?` retourne un `Boolean`
- `!` modifie l’object et/ou est "dangereuse" (ex: lancer une exception si echec)

```ruby
'Bacon'.eql?('Lettuce')
'Bacon'.send(:eql?, 'Cheese')
'Bacon'.send('eql?', 'Tomato')
# Sans parenthèses!
'Bacon'.eql? 'Bacon'
```

---

# Operateurs

Les operateurs sont aussi des méthodes, mais _"sucré"_ (sucre syntaxique).

```ruby
'operateur' + ' chocolat'
'operateur'.+(' caramel')
'operateur'.send(:+, ' whipped cream')
'operateur'.send('+', ' honey')
```

---


# Object

> Tout est un objet.

Les objects en disent long sur eux-même.

```ruby
"Foo".class
# => String

"Foo".class.class
# => Class

"Foo".methods
# => [:include?, :%, :*, :+, :to_c, :unicode_normalize, :unicode_normalize!, :unicode_normalized?, :count, :partition]

"Foo".class == String
# => true

String.ancestors
# => [String, Comparable, Object, Kernel, BasicObject]

String.superclass
# => Object

"Foo".instance_of?(String) && "Foo".is_a?(String) && "Foo".kind_of?(String)
# => true
```

---

# Flexibilité

Ruby est très flexible il est possible d’ajouter/modifier ce qui existe déjà.

Ajouter la méthode `plus` à la class `Numeric`:

```ruby
class Numeric
  def plus(x)
    self.+(x)
  end
end

5.plus 6
# => 11
```

---

# Blocks

Un programmeur peut associer à toute méthode une _closure_, un bloc de code _« anonyme »_ décrivant la manière dont la méthode doit se comporter.

Une telle _closure_ est appelée en Ruby un `bloc`.


```ruby
list = [1, 2, 3]

list.map do |number|
  number + 1
end
# => [2, 3, 4]

list.map { |number| number + 1 }
# => [2, 3, 4]
```

---

# Modules

[Reference](https://ruby-doc.org/core-2.5.1/Module.html)

Ruby permet **volontairement que l’héritage simple**, mais il est possible de d’ajouter des méthodes en incluant des modules.

```ruby
module MyMixin
  def abc
    # ...
  end
end
```

```ruby
class MyArray
  include MyMixin
end
```

---

# Symboles

[Reference](https://ruby-doc.org/core-2.5.1/Symbol.html)

Les symboles sont les objets les plus basiques en Ruby. C'est un nom associé à un identifiant interne unique. À chaque fois que vous assignez le nom d'un symbole à un objet, c’est toujours le même symbole qui est utilisé.

Moins de mémoire, comparaison plus rapide.

```ruby
flavor = :bacon
# => :bacon

flavor.class
# => Symbol

flavor == "bacon".to_sym
# => true
```

---

# Classes

[Reference](https://ruby-doc.org/core-2.5.1/Class.html)

```ruby
class Foo
  # Méthode de classe.
  def self.qux
    # ...
  end

  # Méthode d'instance.
  def wiz
    # ...
  end

  private

  # Méthode d'instance privée.
  def waz
    # ...
  end
end
```

---

# Classes

[Reference](https://ruby-doc.org/core-2.5.1/Class.html)

```ruby
class Bar
  # Constructeur.
  def initialize(bar)
    @bar = bar
  end

  # Setter.
  def bar=(bar)
    @bar = bar
  end
  # Getter.
  def bar
    @bar
  end
end

bar = Bar.new("bar")
# => #<Bar:0x007fe6a5125d98 @bar="bar">
```

---

# Classes

[Reference](https://ruby-doc.org/core-2.5.1/Class.html)

Version courte de la class `Bar` avec

- [attr_reader](https://ruby-doc.org/core-2.5.1/Module.html#method-i-attr_reader) - Définit seulement un "getter".
- [attr_writer](https://ruby-doc.org/core-2.5.1/Module.html#method-i-attr_writer) - Définit seulement un "setter".

```ruby
class Bar
  attr_reader :bar
  attr_writer :bar

  # Constructeur.
  def initialize(bar)
    @bar = bar
  end
end
```

Encore plus court avec:
- [attr_accessor](https://ruby-doc.org/core-2.5.1/Module.html#method-i-attr_accessor) - Définit un "setter" et un "getter".

---

# Conditions

| Value | Déscription | class |
|------|--------|------|
| `nil` | nul, vide ou indéfini | `NilClass` |
| `true` | vrai | `TrueClass` |
| `false` | faux | `FalseClass` |

```
<, <=, >, >=, ==, !=, !
```

```ruby
1 == 1 #=> true
2 == 1 #=> false

1 != 1 #=> false
2 != 1 #=> true
!true  #=> false
!false #=> true

# Autre que `false`, `nil` est la seule autre valeur "fausse".
!nil   #=> true
!false #=> true
!0     #=> false

# Donc "0" est considéré comme "vrai".
```

---

# if/elsif/else

```ruby
value = [nil, true, false].sample
if value.nil?
  puts "Value is nil!"
elsif value == true
  puts "Value is true!"
else
  puts "Value is false!"
end
```

---

# unless

> Pour être plus lisible.

```ruby
unless value.nil?
  puts "value is not nil!"
end

if !value.nil?
  puts "value is not nil!"
end
```

# single line

```ruby
puts "Yes!" if condition_is_true
```

---

# Array

[Reference](https://ruby-doc.org/core-2.5.1/Array.html)

```ruby
list = [0, 1, 2, 3, 4, 5]

list.length
# => 6

list.first == list[0] # 0
# => true

list.last == list[-1] # 5
# => true

list[2, 2] == list.slice(2, 2) # [2, 3]
# => true

list.include? 6
# => false

list[1000]
# => nil

list.each { |number| print number } # Print 012345
```

---

# Hash

[Reference](https://ruby-doc.org/core-2.5.1/Hash.html)

```ruby
hash = { foo: 1, "foo" => 2 }

hash.length
# => 2

hash.keys
# => [:foo, "foo"]

hash.values
# => [1, 2]

hash[:foo]
# => 1

hash["foo"]
# => 2
```

---

# Hash

[Reference](https://ruby-doc.org/core-2.5.1/Hash.html)

```ruby
hash = { foo: 1, "foo" => 2 }

hash.key? :bar
# => false

hash[:bar]
# => nil

hash.each { |key, value| puts "#{key.inspect} = #{value}" }
# :foo = 1
# "foo" = 2
```

---

# Enumerable

[Reference](https://ruby-doc.org/core-2.5.1/Enumerable.html)

Les classes `Array` **et** `Hash` incluent le module _Enumerable_.

```ruby
list = [1, 2, 3]

list.map { |number| number + 1}
# => [2, 3, 4]

list.reduce(0) { |total, number| total + number }
# => 6

list.sum
# => 6

list.find { |number| number.even? }
# => 2
```

---

# Références

- https://www.ruby-lang.org Ruby website.
- https://www.ruby-lang.org/en/documentation/quickstart/ Quickstart.
- https://ruby-doc.org/ Documentation.
- https://rubymonk.com/ Free, interactive tutorials in your browser.
- http://tryruby.org/ Try Ruby in your browser.
- https://learnxinyminutes.com/docs/fr-fr/ruby-fr/ Apprendre X en Y minutes, Où X=ruby.
- http://awesome-ruby.com/ A collection of awesome Ruby libraries, tools, frameworks and software.
- https://www.ruby-toolbox.com/ List de gemmes organisés par catégories.

---

# RubyGems

<p align='center'>
  <img alt='RubyGems logo' width='100' src='./assets/images/rubygems-logo.png'/>
</p>

Gestionnaire de paquets sophistiqué pour Ruby.

Un paquet est appelé `gem`, pour _gemme_ 💎 en anglais.

https://rubygems.org

---

## Utilisation

Installer une `gem` (globalement):

```shell
gem install GEMNAME [GEMNAME ...] [options]
```

Chercher une `gem`:

```shell
gem search [REGEXP] [options]
```

---

# Bundler

<p align='center'>
  <img alt='Bundler logo' width='100' src='./assets/images/bundler-logo.png'/>
</p>

Fournit un environnement cohérent pour les projets Ruby en suivant et en installant les gemmes exactes et les versions nécessaires.

https://bundler.io/

---

## Utilisation

On spécifie les `gem` dépendantes dans un fichier `Gemfile` à la racine de notre projet:

```ruby
source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~> 2.0.1'
gem 'rspec'
```

Ce fichier est en fait du code Ruby!

---

Pour installer les dépendances:

```shell
bundle install # ou simplement `bundle`
```

Ceci générera aussi un fichier `Gemfile.lock` contenant les noms et versions exacts nécéssaires au projet.

_NOTE: Il est essentiel de version le fichier `Gemfile` et `Gemfile.lock`._

---

## Challenge

Faire une _gem_ qui expose l'API gratuit de Google Translate incluant un _CLI_.

Code source de départ [https://github.com/masterT/google-translate/tree/challenge](https://github.com/masterT/google-translate/tree/challenge).

<iframe src="https://giphy.com/embed/d4zHnLjdy48Cc" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
