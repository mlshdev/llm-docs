> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/valueforvariable(withname:)](https://developer.apple.com/documentation/automator/amworkflow/valueforvariable(withname:))

# valueForVariable(withName:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Returns the value of the workflow variable with the specified name.

## Declaration

```swift
func valueForVariable(withName variableName: String) -> Any?
```

## Parameters

- `variableName`: The variable name.

<a id="return-value"></a>

## Return Value

The value for the variable. Returns `nil` if no variable is found with the specified name.

## See Also

### Getting Information About a Workflow

- [actions](actions.md): An array of the workflow’s actions.
- [fileURL](fileurl.md): A URL that specifies the location of the workflow file.

# valueForVariableWithName: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Returns the value of the workflow variable with the specified name.

## Declaration

```objectivec
- (id) valueForVariableWithName:(NSString *) variableName;
```

## Parameters

- `variableName`: The variable name.

<a id="return-value"></a>

## Return Value

The value for the variable. Returns `nil` if no variable is found with the specified name.

## See Also

### Getting Information About a Workflow

- [actions](actions.md): An array of the workflow’s actions.
- [fileURL](fileurl.md): A URL that specifies the location of the workflow file.
