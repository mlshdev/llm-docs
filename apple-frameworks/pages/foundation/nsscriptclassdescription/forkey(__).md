> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/forkey(_:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/forkey(_:))

# forKey(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description instance for the class type of the specified attribute or relationship.

## Declaration

```swift
func forKey(_ key: String) -> NSScriptClassDescription?
```

## Parameters

- `key`: The identifying key for an attribute or relationship of the receiver.

<a id="return-value"></a>

## Return Value

The instance of `NSScriptClassDescription` for the type of the attribute or relationship specified by `key`. Returns `nil` if no scriptable property corresponds to `key`.

## See Also

### Getting a Script Class Description

- [init(for:)](init%28for_%29.md): Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.
- [superclass](superclass.md): Returns the class description instance for the superclass of the receiver’s class.

# classDescriptionForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description instance for the class type of the specified attribute or relationship.

## Declaration

```objectivec
- (NSScriptClassDescription *) classDescriptionForKey:(NSString *) key;
```

## Parameters

- `key`: The identifying key for an attribute or relationship of the receiver.

<a id="return-value"></a>

## Return Value

The instance of `NSScriptClassDescription` for the type of the attribute or relationship specified by `key`. Returns `nil` if no scriptable property corresponds to `key`.

## See Also

### Getting a Script Class Description

- [classDescriptionForClass:](init%28for_%29.md): Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.
- [superclassDescription](superclass.md): Returns the class description instance for the superclass of the receiver’s class.
