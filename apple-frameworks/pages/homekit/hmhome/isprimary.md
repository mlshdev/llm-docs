> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/isprimary](https://developer.apple.com/documentation/homekit/hmhome/isprimary)

# isPrimary (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether this is the primary home for its home manager.

## Declaration

```swift
var isPrimary: Bool { get }
```

## See Also

### Identifying a home

- [name](name.md): The name the user gives to the home.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the home.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the home.

# primary (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether this is the primary home for its home manager.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPrimary) BOOL primary;
```

## See Also

### Identifying a home

- [name](name.md): The name the user gives to the home.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the home.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the home.
