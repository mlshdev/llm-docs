> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameterdependency](https://developer.apple.com/documentation/appintents/intentparameterdependency)

# IntentParameterDependency

**Framework:** App Intents  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A property wrapper that represents an app intent dependency you use to provide dynamic options.

## Declaration

```swift
@propertyWrapper final class IntentParameterDependency<Intent> where Intent : AppIntent
```

<a id="overview"></a>

## Overview

Use the `IntentParameterDependency` property wrapper for properties that represent dynamic options in your [DynamicOptionsProvider](dynamicoptionsprovider.md) implementations as shown in the following example:

```swift
struct SoupQuery: EntityStringQuery {
    @IntentParameterDependency<OrderSoup>(
        \.$quantity
    )
    var orderSoup

    func entities(matching string: String) async throws -> [Soup] {
        guard let orderSoup else {
            return []
        }
        return Soup.allSoups.filter {
            $0.name.contains(string) &&
            $0.availableQuantity >= orderSoup.quantity
        }
    }
}
```

## Topics

### Initializers

- [init(\_:)](intentparameterdependency/init%28__%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:)](intentparameterdependency/init%28____%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:)](intentparameterdependency/init%28______%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:)](intentparameterdependency/init%28________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:)](intentparameterdependency/init%28__________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28____________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28______________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28__________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28____________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28______________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28__________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28____________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentparameterdependency/init%28______________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.

### Instance Properties

- [wrappedValue](intentparameterdependency/wrappedvalue.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parameters

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md): Enable people to configure app intents with their custom input values.
- [IntentParameter](intentparameter.md): A property wrapper that indicates the associated property is an input argument of the app intent.
- [IntentParameterContext](intentparametercontext.md): A type that provides information about an associated parameter during value resolution.
- [InputConnectionBehavior](inputconnectionbehavior.md): Describes the input behaviors for connecting a parameter to the output of the previous App Intent.
- [DynamicOptionsProvider](dynamicoptionsprovider.md): An interface for providing a dynamic list of options for a parameter of your app intent.
- [Resolvers](resolvers.md): Resolve the parameters of your app intents, and extend the standard resolution types to include your app’s custom types.
