> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextension/configuration-swift.associatedtype](https://developer.apple.com/documentation/extensionfoundation/appextension/configuration-swift.associatedtype)

# Configuration

**Framework:** ExtensionFoundation  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 9.0+

A type that manages configuration data for an app extension.

## Declaration

```swift
associatedtype Configuration : AppExtensionConfiguration
```

<a id="discussion"></a>

## Discussion

When you create a custom app extension, Swift infers this type from your implementation of the required [configuration](configuration-swift.property.md) property.

## See Also

### Configuring the app extension

- [configuration](configuration-swift.property.md): The configuration details for this app extension.
