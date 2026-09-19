> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcdevicetype/init(identifier:)

# init(identifier:) (Swift)

**Framework:** Game Controller  
**Kind:** Initializer  
**Availability:** visionOS 27.0+

Create a device type for an identifier.

## Declaration

```swift
convenience init?(identifier: String)
```

<a id="discussion"></a>

## Discussion

This initializer returns nil if the system doesn’t know the device type for \\a identifier.

# deviceTypeWithIdentifier: (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** visionOS 27.0+

Create a device type for an identifier.

## Declaration

```objectivec
+ (instancetype) deviceTypeWithIdentifier:(NSString *) identifier;
```

<a id="discussion"></a>

## Discussion

This initializer returns nil if the system doesn’t know the device type for \\a identifier.
