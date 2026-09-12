> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/resolvers](https://developer.apple.com/documentation/appintents/resolvers)

# Resolvers

**Framework:** App Intents  
**Kind:** API Collection

Resolve the parameters of your app intents, and extend the standard resolution types to include your app’s custom types.

<a id="Overview"></a>

## Overview

System experiences like Siri and the Shortcuts app produce input that doesn’t always match what your code requires. For example, natural spoken language commands from Siri are strings, but your app intent might require an integer or floating-point value instead. Resolvers let the system translate one type to another automatically.

The system provides resolvers to convert between integer, floating-point, Boolean, string, and URL types. As needed, the system can chain multiple resolvers together to translate between types for which no single resolver exists. For example, it can translate an integer into a string and then translate the string into a Boolean value. If your app defines custom types, create your own resolvers to translate those types to more recognizable values.

## Topics

### Integer resolution

- [IntFromDoubleResolver](intfromdoubleresolver.md): A resolver that converts a double into an integer using the specified rounding rule and validates the result is within the parameter’s inclusive range.
- [IntFromStringResolver](intfromstringresolver.md): A resolver that converts a string into an integer in the specified base and validates the result is within the parameter’s inclusive range.
- [IntResolver](intresolver.md): A resolver that validates an integer is within the parameter’s inclusive range.

### Floating-point resolution

- [DoubleFromIntResolver](doublefromintresolver.md)
- [DoubleFromStringResolver](doublefromstringresolver.md): A resolver that converts a string into a double and validates the result is within the parameter’s inclusive range.
- [DoubleResolver](doubleresolver.md): A resolver that validates a double is within the parameter’s inclusive range.

### String resolution

- [AttributedStringFromStringResolver](attributedstringfromstringresolver.md): A resolver that converts a string into an attributed string.
- [StringFromDoubleResolver](stringfromdoubleresolver.md): A resolver that converts a double into a string.
- [StringFromIntResolver](stringfromintresolver.md): A resolver that converts one or more integers into one or more strings.

### Boolean resolution

- [BoolFromStringResolver](boolfromstringresolver.md): A resolver that converts a string into a Boolean, optionally using a localized display name.

### URL resolution

- [URLFromStringResolver](urlfromstringresolver.md): A resolver that converts a string into a URL.

### Custom resolution

- [Resolver](resolver.md): An interface to convert a value from one type to a different type.

### Range validation

- [RangeCheckingResolver](rangecheckingresolver.md): An interface for validating that a value is within a parameter’s defined inclusive range.
- [RangeComparableProperty](rangecomparableproperty.md)

## See Also

### Parameters

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md): Enable people to configure app intents with their custom input values.
- [IntentParameter](intentparameter.md): A property wrapper that indicates the associated property is an input argument of the app intent.
- [IntentParameterDependency](intentparameterdependency.md): A property wrapper that represents an app intent dependency you use to provide dynamic options.
- [IntentParameterContext](intentparametercontext.md): A type that provides information about an associated parameter during value resolution.
- [InputConnectionBehavior](inputconnectionbehavior.md): Describes the input behaviors for connecting a parameter to the output of the previous App Intent.
- [DynamicOptionsProvider](dynamicoptionsprovider.md): An interface for providing a dynamic list of options for a parameter of your app intent.
