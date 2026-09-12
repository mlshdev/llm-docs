> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/write(to:)](https://developer.apple.com/documentation/automator/amaction/write(to:))

# write(to:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.

## Declaration

```swift
func write(to dictionary: NSMutableDictionary)
```

## Parameters

- `dictionary`: A dictionary that contains parameter and other configuration information about the action.

<a id="Discussion"></a>

## Discussion

Automator sends this message to an action object prior to archiving it. In its implementation of this method, the action object should first invoke the superclass implementation.

## See Also

### Initializing and Encoding

- [init(definition:fromArchive:)](init%28definition_fromarchive_%29.md): Initializes the action with the specified definition.
- [init(contentsOf:)](init%28contentsof_%29.md): Loads an Automator action from a file URL.

# writeToDictionary: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.

## Declaration

```objectivec
- (void) writeToDictionary:(NSMutableDictionary<NSString *,id> *) dictionary;
```

## Parameters

- `dictionary`: A dictionary that contains parameter and other configuration information about the action.

<a id="Discussion"></a>

## Discussion

Automator sends this message to an action object prior to archiving it. In its implementation of this method, the action object should first invoke the superclass implementation.

## See Also

### Initializing and Encoding

- [initWithDefinition:fromArchive:](init%28definition_fromarchive_%29.md): Initializes the action with the specified definition.
- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Loads an Automator action from a file URL.
