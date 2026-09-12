> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/init(contentsof:)](https://developer.apple.com/documentation/automator/amaction/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Automator  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Loads an Automator action from a file URL.

## Declaration

```swift
init(contentsOf fileURL: URL) throws
```

## Parameters

- `fileURL`: URL that specifies the location of an action file.

<a id="return-value"></a>

## Return Value

The initialized action.

<a id="Discussion"></a>

## Discussion

This method is typically invoked by app that use the [AMWorkflow](../amworkflow.md) class to embed Automator workflows. It is used to allow creation of actions for a workflow.

## See Also

### Initializing and Encoding

- [init(definition:fromArchive:)](init%28definition_fromarchive_%29.md): Initializes the action with the specified definition.
- [write(to:)](write%28to_%29.md): Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Loads an Automator action from a file URL.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) fileURL error:(NSError **) outError;
```

## Parameters

- `fileURL`: URL that specifies the location of an action file.
- `outError`: If no action is found or if an error occurs in initializing or running it, upon return contains an instance of [NSError](https://developer.apple.com/documentation/foundation/nserror) that describes the problem. For keys and error constants used with action errors, see [AMError](../amerror.md).

<a id="return-value"></a>

## Return Value

The initialized action.

<a id="Discussion"></a>

## Discussion

This method is typically invoked by app that use the [AMWorkflow](../amworkflow.md) class to embed Automator workflows. It is used to allow creation of actions for a workflow.

## See Also

### Initializing and Encoding

- [initWithDefinition:fromArchive:](init%28definition_fromarchive_%29.md): Initializes the action with the specified definition.
- [writeToDictionary:](write%28to_%29.md): Examines the parameters and other configuration information specified in the passed dictionary and adds its own information to it if appropriate.
