> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/supportedfamilies-4ckbx](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/supportedfamilies-4ckbx)

# supportedFamilies

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The families that support this type of complication.

## Declaration

```swift
var supportedFamilies: [CLKComplicationFamily] { get }
```

<a id="Discussion"></a>

## Discussion

Different descriptors can support different sets of families.

## See Also

### Accessing the descriptor’s data

- [identifier](identifier.md): A string that uniquely identifies the descriptor.
- [displayName](displayname.md): A localized string that identifies complications from the descriptor to the user.
- [userActivity](useractivity.md): A user activity object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): A dictionary of data that your data source can use to generate timeline entries.
