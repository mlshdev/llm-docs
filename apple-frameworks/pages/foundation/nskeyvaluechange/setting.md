> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvaluechange/setting](https://developer.apple.com/documentation/foundation/nskeyvaluechange/setting)

# NSKeyValueChange.setting (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates that the value of the observed key path was set to a new value. This change can occur when observing an attribute of an object, as well as properties that specify to-one and to-many relationships.

## Declaration

```swift
case setting
```

## See Also

### Constants

- [NSKeyValueChange.insertion](insertion.md): Indicates that an object has been inserted into the to-many relationship that is being observed.
- [NSKeyValueChange.removal](removal.md): Indicates that an object has been removed from the to-many relationship that is being observed.
- [NSKeyValueChange.replacement](replacement.md): Indicates that an object has been replaced in the to-many relationship that is being observed.

# NSKeyValueChangeSetting (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates that the value of the observed key path was set to a new value. This change can occur when observing an attribute of an object, as well as properties that specify to-one and to-many relationships.

## Declaration

```objectivec
NSKeyValueChangeSetting
```

## See Also

### Constants

- [NSKeyValueChangeInsertion](insertion.md): Indicates that an object has been inserted into the to-many relationship that is being observed.
- [NSKeyValueChangeRemoval](removal.md): Indicates that an object has been removed from the to-many relationship that is being observed.
- [NSKeyValueChangeReplacement](replacement.md): Indicates that an object has been replaced in the to-many relationship that is being observed.
