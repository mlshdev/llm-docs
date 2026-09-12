> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptexecutioncontext/objectbeingtested](https://developer.apple.com/documentation/foundation/nsscriptexecutioncontext/objectbeingtested)

# objectBeingTested (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the top-level container object currently being tested in a “whose” qualifier to a given object.

## Declaration

```swift
var objectBeingTested: Any? { get set }
```

## Parameters

- `object`: The top-level container object currently being tested.

## See Also

### Getting and setting the container object

- [topLevelObject](toplevelobject.md): Sets the top-level object for an object-specifier evaluation.
- [rangeContainerObject](rangecontainerobject.md): Sets the top-level container object for a range-specifier evaluation to a give object.

# objectBeingTested (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the top-level container object currently being tested in a “whose” qualifier to a given object.

## Declaration

```objectivec
@property (retain, nullable) id objectBeingTested;
```

## Parameters

- `object`: The top-level container object currently being tested.

## See Also

### Getting and setting the container object

- [topLevelObject](toplevelobject.md): Sets the top-level object for an object-specifier evaluation.
- [rangeContainerObject](rangecontainerobject.md): Sets the top-level container object for a range-specifier evaluation to a give object.
