> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/identifier](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/identifier)

# identifier (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A string that uniquely identifies the descriptor.

## Declaration

```swift
var identifier: String { get }
```

## See Also

### Accessing the descriptor’s data

- [displayName](displayname.md): A localized string that identifies complications from the descriptor to the user.
- [supportedFamilies](supportedfamilies-4ckbx.md): The families that support this type of complication.
- [userActivity](useractivity.md): A user activity object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): A dictionary of data that your data source can use to generate timeline entries.

# identifier (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A string that uniquely identifies the descriptor.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * identifier;
```

## See Also

### Accessing the descriptor’s data

- [displayName](displayname.md): A localized string that identifies complications from the descriptor to the user.
- [supportedFamilies](supportedfamilies-50ink.md): The families that support this type of complication.
- [userActivity](useractivity.md): A user activity object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): A dictionary of data that your data source can use to generate timeline entries.
