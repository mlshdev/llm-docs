> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/user-swift.struct/namecomponents

# nameComponents

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Access the name of the person.

## Declaration

```swift
var nameComponents: PersonNameComponents?
```

<a id="Discussion"></a>

## Discussion

You can use this property to construct the person’s name for display. Use the components with an instance of [PersonNameComponentsFormatter](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter) to create a string representation for the current locale.

## See Also

### Identifying the person

- [appleID](appleid.md): Access the Apple ID of the person.
