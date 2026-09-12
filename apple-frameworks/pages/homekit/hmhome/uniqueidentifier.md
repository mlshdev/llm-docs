> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmhome/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the home.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Identifying a home

- [name](name.md): The name the user gives to the home.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the home.
- [isPrimary](isprimary.md): A Boolean value that indicates whether this is the primary home for its home manager.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the home.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Identifying a home

- [name](name.md): The name the user gives to the home.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the home.
- [primary](isprimary.md): A Boolean value that indicates whether this is the primary home for its home manager.
