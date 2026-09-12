> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/name](https://developer.apple.com/documentation/homekit/hmhome/name)

# name (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name the user gives to the home.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

The name should be configured by the user when a new home is created.

## See Also

### Identifying a home

- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the home.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the home.
- [isPrimary](isprimary.md): A Boolean value that indicates whether this is the primary home for its home manager.

# name (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name the user gives to the home.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The name should be configured by the user when a new home is created.

## See Also

### Identifying a home

- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the home.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the home.
- [primary](isprimary.md): A Boolean value that indicates whether this is the primary home for its home manager.
