> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/applinks/substitutionvariables-swift.dictionary](https://developer.apple.com/documentation/bundleresources/applinks/substitutionvariables-swift.dictionary)

# applinks.SubstitutionVariables (Swift)

**Framework:** Bundle Resources  
**Kind:** Object  
**Availability:** iOS 13.5+ · iPadOS 13.5+ · macOS 10.15.6+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 7.0+

A list of named strings and an associated array of string values that define custom substitution variables to use for URL pattern matching.

## Declaration

```swift
object applinks.SubstitutionVariables
```

## Properties

- `Any Key` — `[string]`:

<a id="Discussion"></a>

## Discussion

The keys in this object are substitution variable names; the value for each key is an array of strings to substitute for the associated variable in URL pattern-matching operations.

The names you use for substitution variables are always case-sensitive and can contain any character except `$`, `(`, and `)`.

The values you use with substitution variables are case-sensitive by default and can contain the `?` and `*` wildcard characters, but not other substitution variables.

The following is a list of predefined substitution variables and examples of each:

`$(alpha)` — All upper- and lowercase ASCII letters of the alphabet: `A`, `a`, `B`, `b`, `C`, `c`, …, `Z`, `z`.

`$(upper)` — All uppercase ASCII letters of the alphabet: `A`, `B`, `C`, …, `Z`.

`$(lower)` — All lowercase ASCII letters of the alphabet: `a`, `b`, `c`, …, `z`.

`$(alnum)` — All alphanumeric ASCII characters: `A`, `a`, …, `Z`, `z`, `0`, …, `9`.

`$(digit)` — All decimal digits: `0`, …, `9`.

`$(xdigit)` — All hexadecimal digits: `0`, …, `F`, `f`.

`$(region)` — All ISO regions in [isoRegionCodes](../../foundation/locale/isoregioncodes.md), such as `CA`, `UK`, and `US`.

`$(lang)` — All ISO languages in [isoLanguageCodes](../../foundation/locale/isolanguagecodes.md), such as `ar`, `en`, and `zh`.

This example code shows how to use universal links substitution variables in an association file:

```javascript
{
  "applinks": {
    "substitutionVariables": {
      "food": [ "burrito", "pizza", "sushi", "samosa" ]
    },
    "details": [{
      "appIDs": [ ... ],
      "components": [
        { "/" : "/$(lang)_$(region)/$(food)/" }
      ]
    }]
  }
}
```

# applinks.SubstitutionVariables (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Object  
**Availability:** iOS 13.5+ · iPadOS 13.5+ · macOS 10.15.6+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 7.0+

A list of named strings and an associated array of string values that define custom substitution variables to use for URL pattern matching.

## Declaration

```objectivec
object applinks.SubstitutionVariables
```

## Properties

- `Any Key` — `[string]`:

<a id="Discussion"></a>

## Discussion

The keys in this object are substitution variable names; the value for each key is an array of strings to substitute for the associated variable in URL pattern-matching operations.

The names you use for substitution variables are always case-sensitive and can contain any character except `$`, `(`, and `)`.

The values you use with substitution variables are case-sensitive by default and can contain the `?` and `*` wildcard characters, but not other substitution variables.

The following is a list of predefined substitution variables and examples of each:

`$(alpha)` — All upper- and lowercase ASCII letters of the alphabet: `A`, `a`, `B`, `b`, `C`, `c`, …, `Z`, `z`.

`$(upper)` — All uppercase ASCII letters of the alphabet: `A`, `B`, `C`, …, `Z`.

`$(lower)` — All lowercase ASCII letters of the alphabet: `a`, `b`, `c`, …, `z`.

`$(alnum)` — All alphanumeric ASCII characters: `A`, `a`, …, `Z`, `z`, `0`, …, `9`.

`$(digit)` — All decimal digits: `0`, …, `9`.

`$(xdigit)` — All hexadecimal digits: `0`, …, `F`, `f`.

`$(region)` — All ISO regions in [isoRegionCodes](../../foundation/locale/isoregioncodes.md), such as `CA`, `UK`, and `US`.

`$(lang)` — All ISO languages in [isoLanguageCodes](../../foundation/locale/isolanguagecodes.md), such as `ar`, `en`, and `zh`.

This example code shows how to use universal links substitution variables in an association file:

```javascript
{
  "applinks": {
    "substitutionVariables": {
      "food": [ "burrito", "pizza", "sushi", "samosa" ]
    },
    "details": [{
      "appIDs": [ ... ],
      "components": [
        { "/" : "/$(lang)_$(region)/$(food)/" }
      ]
    }]
  }
}
```
