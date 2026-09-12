> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/actions](https://developer.apple.com/documentation/automator/amworkflow/actions)

# actions (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An array of the workflow’s actions.

## Declaration

```swift
var actions: [AMAction] { get }
```

<a id="return-value"></a>

## Return Value

An array of actions for the workflow file. Actions are instances of classes such as [AMBundleAction](../ambundleaction.md), [AMAppleScriptAction](../amapplescriptaction.md), and [AMShellScriptAction](../amshellscriptaction.md).

## See Also

### Getting Information About a Workflow

- [fileURL](fileurl.md): A URL that specifies the location of the workflow file.
- [valueForVariable(withName:)](valueforvariable%28withname_%29.md): Returns the value of the workflow variable with the specified name.

# actions (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An array of the workflow’s actions.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<__kindof AMAction *> * actions;
```

<a id="return-value"></a>

## Return Value

An array of actions for the workflow file. Actions are instances of classes such as [AMBundleAction](../ambundleaction.md), [AMAppleScriptAction](../amapplescriptaction.md), and [AMShellScriptAction](../amshellscriptaction.md).

## See Also

### Getting Information About a Workflow

- [fileURL](fileurl.md): A URL that specifies the location of the workflow file.
- [valueForVariableWithName:](valueforvariable%28withname_%29.md): Returns the value of the workflow variable with the specified name.
