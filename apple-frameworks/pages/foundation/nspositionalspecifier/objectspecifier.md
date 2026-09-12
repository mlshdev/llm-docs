> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspositionalspecifier/objectspecifier](https://developer.apple.com/documentation/foundation/nspositionalspecifier/objectspecifier)

# objectSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the object specifier specified at initialization time.

## Declaration

```swift
var objectSpecifier: NSScriptObjectSpecifier { get }
```

<a id="return-value"></a>

## Return Value

An object specifier for a container.

## See Also

### Accessing information about a positional specifier

- [insertionContainer](insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionKey](insertionkey.md): Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.
- [insertionReplaces](insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [position](position.md): Returns the insertion position specified at initialization time.
- [setInsertionClassDescription(\_:)](setinsertionclassdescription%28__%29.md): Sets the class description for the object or objects to be inserted.

# objectSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the object specifier specified at initialization time.

## Declaration

```objectivec
@property (retain, readonly) NSScriptObjectSpecifier * objectSpecifier;
```

<a id="return-value"></a>

## Return Value

An object specifier for a container.

## See Also

### Accessing information about a positional specifier

- [insertionContainer](insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionKey](insertionkey.md): Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.
- [insertionReplaces](insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [position](position.md): Returns the insertion position specified at initialization time.
- [setInsertionClassDescription:](setinsertionclassdescription%28__%29.md): Sets the class description for the object or objects to be inserted.
