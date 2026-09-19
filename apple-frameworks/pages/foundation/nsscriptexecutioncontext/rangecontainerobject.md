> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptexecutioncontext/rangecontainerobject

# rangeContainerObject (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the top-level container object for a range-specifier evaluation to a give object.

## Declaration

```swift
var rangeContainerObject: Any? { get set }
```

## Parameters

- `container`: The top-level container object for a range-specifier evaluation.

<a id="Discussion"></a>

## Discussion

Instances of `NSRangeSpecifier` contain object specifiers representing the first or last element in a range of elements, and these specifiers are evaluated in the context of `container`.

## See Also

### Getting and setting the container object

- [topLevelObject](toplevelobject.md): Sets the top-level object for an object-specifier evaluation.
- [objectBeingTested](objectbeingtested.md): Sets the top-level container object currently being tested in a “whose” qualifier to a given object.

# rangeContainerObject (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the top-level container object for a range-specifier evaluation to a give object.

## Declaration

```objectivec
@property (retain, nullable) id rangeContainerObject;
```

## Parameters

- `container`: The top-level container object for a range-specifier evaluation.

<a id="Discussion"></a>

## Discussion

Instances of `NSRangeSpecifier` contain object specifiers representing the first or last element in a range of elements, and these specifiers are evaluated in the context of `container`.

## See Also

### Getting and setting the container object

- [topLevelObject](toplevelobject.md): Sets the top-level object for an object-specifier evaluation.
- [objectBeingTested](objectbeingtested.md): Sets the top-level container object currently being tested in a “whose” qualifier to a given object.
