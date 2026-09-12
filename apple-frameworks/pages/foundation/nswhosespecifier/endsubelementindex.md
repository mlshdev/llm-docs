> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nswhosespecifier/endsubelementindex](https://developer.apple.com/documentation/foundation/nswhosespecifier/endsubelementindex)

# endSubelementIndex (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the index position of the last sub-element within the range of objects being tested that pass the specifier’s test.

## Declaration

```swift
var endSubelementIndex: Int { get set }
```

## Parameters

- `index`: The index position of the end sub-element.

<a id="Discussion"></a>

## Discussion

Used only if the end sub-element identifier is `NSIndexSubelement`.

## See Also

### Accessing information about a whose specifier

- [endSubelementIdentifier](endsubelementidentifier.md): Sets the end sub-element identifier for the specifier to the value of a given sub-element.
- [startSubelementIdentifier](startsubelementidentifier.md): Returns the start sub-element identifier for the receiver.
- [startSubelementIndex](startsubelementindex.md): Returns the index position of the first sub-element within the range of objects being tested that pass the receiver’s test.
- [test](test.md): Returns the test object encapsulated by the receiver.

# endSubelementIndex (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the index position of the last sub-element within the range of objects being tested that pass the specifier’s test.

## Declaration

```objectivec
@property NSInteger endSubelementIndex;
```

## Parameters

- `index`: The index position of the end sub-element.

<a id="Discussion"></a>

## Discussion

Used only if the end sub-element identifier is `NSIndexSubelement`.

## See Also

### Accessing information about a whose specifier

- [endSubelementIdentifier](endsubelementidentifier.md): Sets the end sub-element identifier for the specifier to the value of a given sub-element.
- [startSubelementIdentifier](startsubelementidentifier.md): Returns the start sub-element identifier for the receiver.
- [startSubelementIndex](startsubelementindex.md): Returns the index position of the first sub-element within the range of objects being tested that pass the receiver’s test.
- [test](test.md): Returns the test object encapsulated by the receiver.
