> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicetype/init(identifier:)](https://developer.apple.com/documentation/gamecontroller/gcdevicetype/init(identifier:))

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
