> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/init(identifier:)](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/init(identifier:))

# init(identifier:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Initializes the type with a string you can use to find the extension point.

## Declaration

```swift
init(identifier: StaticString) throws
```

<a id="discussion"></a>

## Discussion

- Paramerters:

  - identifier: The name of the extension point. This string isn’t the same as the value you put in the [AppExtensionPoint.Identifier](identifier.md) type.
