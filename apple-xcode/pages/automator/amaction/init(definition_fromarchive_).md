> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/init(definition:fromarchive:)](https://developer.apple.com/documentation/automator/amaction/init(definition:fromarchive:))

# init(definition:fromArchive:) (Swift)

**Framework:** Automator  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Initializes the action with the specified definition.

## Declaration

```swift
init?(definition dict: [String : Any]?, fromArchive archived: Bool)
```

## Parameters

- `dict`: A dictionary that describes the action, including any custom definition properties.
- `archived`: If the action is being unarchived, [true](https://developer.apple.com/documentation/swift/true); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

The initialized action.

<a id="Discussion"></a>

## Discussion

This is the primary initializer for all Automator classes. The Automator app sends this message to instances of [AMAction](../amaction.md) both when it loads actions bundles and when it unarchives them.

The [AMAction](../amaction.md) object being instantiated should perform whatever initializations are necessary after invoking `super`’s implementation of this method. It can then examine the values in `dict`, particularly if the action had been archived with custom definition properties.

## See Also

### Initializing and Encoding

- [init(contentsOf:)](init%28contentsof_%29.md): Loads an Automator action from a file URL.
- [write(to:)](write%28to_%29.md): Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.

# initWithDefinition:fromArchive: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Initializes the action with the specified definition.

## Declaration

```objectivec
- (instancetype) initWithDefinition:(NSDictionary<NSString *,id> *) dict fromArchive:(BOOL) archived;
```

## Parameters

- `dict`: A dictionary that describes the action, including any custom definition properties.
- `archived`: If the action is being unarchived, [true](https://developer.apple.com/documentation/swift/true); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

The initialized action.

<a id="Discussion"></a>

## Discussion

This is the primary initializer for all Automator classes. The Automator app sends this message to instances of [AMAction](../amaction.md) both when it loads actions bundles and when it unarchives them.

The [AMAction](../amaction.md) object being instantiated should perform whatever initializations are necessary after invoking `super`’s implementation of this method. It can then examine the values in `dict`, particularly if the action had been archived with custom definition properties.

## See Also

### Initializing and Encoding

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Loads an Automator action from a file URL.
- [writeToDictionary:](write%28to_%29.md): Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.
