> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlprotocol/unregisterclass(_:)

# unregisterClass(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unregisters the specified subclass of [URLProtocol](../urlprotocol.md).

## Declaration

```swift
class func unregisterClass(_ protocolClass: AnyClass)
```

## Parameters

- `protocolClass`: The subclass of [URLProtocol](../urlprotocol.md) to unregister.

<a id="Discussion"></a>

## Discussion

After this method is invoked, `protocolClass` is no longer consulted by the URL loading system.

## See Also

### Registering and unregistering protocol classes

- [registerClass(\_:)](registerclass%28__%29.md): Attempts to register a subclass of [URLProtocol](../urlprotocol.md), making it visible to the URL loading system.

# unregisterClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unregisters the specified subclass of [NSURLProtocol](../urlprotocol.md).

## Declaration

```objectivec
+ (void) unregisterClass:(Class) protocolClass;
```

## Parameters

- `protocolClass`: The subclass of [NSURLProtocol](../urlprotocol.md) to unregister.

<a id="Discussion"></a>

## Discussion

After this method is invoked, `protocolClass` is no longer consulted by the URL loading system.

## See Also

### Registering and unregistering protocol classes

- [registerClass:](registerclass%28__%29.md): Attempts to register a subclass of [NSURLProtocol](../urlprotocol.md), making it visible to the URL loading system.
