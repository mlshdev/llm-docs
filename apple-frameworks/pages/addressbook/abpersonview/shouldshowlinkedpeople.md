> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonview/shouldshowlinkedpeople](https://developer.apple.com/documentation/addressbook/abpersonview/shouldshowlinkedpeople)

# shouldShowLinkedPeople (Swift)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Indicates whether the person view should display data from person records that are linked with the person record being displayed.

## Declaration

```swift
var shouldShowLinkedPeople: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Linked records represent the same actual person, and typically come from different sources.

## See Also

### Working with Person Views

- [editing](editing.md): A Boolean value that indicates whether the person view is in editing mode.
- [person](person.md): The contact record being displayed.

# shouldShowLinkedPeople (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Indicates whether the person view should display data from person records that are linked with the person record being displayed.

## Declaration

```objectivec
@property (assign) BOOL shouldShowLinkedPeople;
```

<a id="Discussion"></a>

## Discussion

Linked records represent the same actual person, and typically come from different sources.

## See Also

### Working with Person Views

- [editing](editing.md): A Boolean value that indicates whether the person view is in editing mode.
- [person](person.md): The contact record being displayed.
