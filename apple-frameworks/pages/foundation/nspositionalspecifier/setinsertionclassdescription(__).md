> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspositionalspecifier/setinsertionclassdescription(_:)](https://developer.apple.com/documentation/foundation/nspositionalspecifier/setinsertionclassdescription(_:))

# setInsertionClassDescription(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the class description for the object or objects to be inserted.

## Declaration

```swift
func setInsertionClassDescription(_ classDescription: NSScriptClassDescription)
```

## Parameters

- `classDescription`: The class description for the object or objects to be inserted.

<a id="Discussion"></a>

## Discussion

This message can be sent at any time after object initialization, but must be sent before evaluation to have any effect.

## See Also

### Accessing information about a positional specifier

- [insertionContainer](insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionKey](insertionkey.md): Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.
- [insertionReplaces](insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [objectSpecifier](objectspecifier.md): Returns the object specifier specified at initialization time.
- [position](position.md): Returns the insertion position specified at initialization time.

# setInsertionClassDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the class description for the object or objects to be inserted.

## Declaration

```objectivec
- (void) setInsertionClassDescription:(NSScriptClassDescription *) classDescription;
```

## Parameters

- `classDescription`: The class description for the object or objects to be inserted.

<a id="Discussion"></a>

## Discussion

This message can be sent at any time after object initialization, but must be sent before evaluation to have any effect.

## See Also

### Accessing information about a positional specifier

- [insertionContainer](insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionKey](insertionkey.md): Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.
- [insertionReplaces](insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [objectSpecifier](objectspecifier.md): Returns the object specifier specified at initialization time.
- [position](position.md): Returns the insertion position specified at initialization time.
