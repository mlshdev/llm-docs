> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptexecutioncontext/toplevelobject](https://developer.apple.com/documentation/foundation/nsscriptexecutioncontext/toplevelobject)

# topLevelObject (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the top-level object for an object-specifier evaluation.

## Declaration

```swift
var topLevelObject: Any? { get set }
```

## Parameters

- `anObject`: The top-level object for an object-specifier evaluation.

## See Also

### Getting and setting the container object

- [objectBeingTested](objectbeingtested.md): Sets the top-level container object currently being tested in a “whose” qualifier to a given object.
- [rangeContainerObject](rangecontainerobject.md): Sets the top-level container object for a range-specifier evaluation to a give object.

# topLevelObject (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the top-level object for an object-specifier evaluation.

## Declaration

```objectivec
@property (retain, nullable) id topLevelObject;
```

## Parameters

- `anObject`: The top-level object for an object-specifier evaluation.

## See Also

### Getting and setting the container object

- [objectBeingTested](objectbeingtested.md): Sets the top-level container object currently being tested in a “whose” qualifier to a given object.
- [rangeContainerObject](rangecontainerobject.md): Sets the top-level container object for a range-specifier evaluation to a give object.
