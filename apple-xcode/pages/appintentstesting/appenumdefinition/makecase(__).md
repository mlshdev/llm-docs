> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appenumdefinition/makecase(_:)](https://developer.apple.com/documentation/appintentstesting/appenumdefinition/makecase(_:))

# makeCase(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an enumeration case with the specified raw value.

## Declaration

```swift
func makeCase(_ rawValue: String) -> AnyAppEnum
```

## Parameters

- `rawValue`: The string representation of the enumeration case.

<a id="return-value"></a>

## Return Value

A type-erased enumeration instance with the specified value.

## Mentioned In

- [Testing your App Intents code](../testing-your-app-intents-code.md)

<a id="discussion"></a>

## Discussion

The provided `rawValue` needs to match one of your enum’s cases.
