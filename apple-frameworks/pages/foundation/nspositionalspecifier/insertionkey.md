> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspositionalspecifier/insertionkey](https://developer.apple.com/documentation/foundation/nspositionalspecifier/insertionkey)

# insertionKey (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.

## Declaration

```swift
var insertionKey: String? { get }
```

<a id="return-value"></a>

## Return Value

A key. Determined by evaluating the receiver.

## See Also

### Accessing information about a positional specifier

- [insertionContainer](insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionReplaces](insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [objectSpecifier](objectspecifier.md): Returns the object specifier specified at initialization time.
- [position](position.md): Returns the insertion position specified at initialization time.
- [setInsertionClassDescription(\_:)](setinsertionclassdescription%28__%29.md): Sets the class description for the object or objects to be inserted.

# insertionKey (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * insertionKey;
```

<a id="return-value"></a>

## Return Value

A key. Determined by evaluating the receiver.

## See Also

### Accessing information about a positional specifier

- [insertionContainer](insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionReplaces](insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [objectSpecifier](objectspecifier.md): Returns the object specifier specified at initialization time.
- [position](position.md): Returns the insertion position specified at initialization time.
- [setInsertionClassDescription:](setinsertionclassdescription%28__%29.md): Sets the class description for the object or objects to be inserted.
