> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/fileurl](https://developer.apple.com/documentation/automator/amworkflow/fileurl)

# fileURL (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A URL that specifies the location of the workflow file.

## Declaration

```swift
var fileURL: URL? { get }
```

<a id="return-value"></a>

## Return Value

URL that specifies the location of the workflow file.

## See Also

### Getting Information About a Workflow

- [actions](actions.md): An array of the workflow’s actions.
- [valueForVariable(withName:)](valueforvariable%28withname_%29.md): Returns the value of the workflow variable with the specified name.

# fileURL (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A URL that specifies the location of the workflow file.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * fileURL;
```

<a id="return-value"></a>

## Return Value

URL that specifies the location of the workflow file.

## See Also

### Getting Information About a Workflow

- [actions](actions.md): An array of the workflow’s actions.
- [valueForVariableWithName:](valueforvariable%28withname_%29.md): Returns the value of the workflow variable with the specified name.
