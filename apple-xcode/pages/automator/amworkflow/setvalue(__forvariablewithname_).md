> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/setvalue(_:forvariablewithname:)](https://developer.apple.com/documentation/automator/amworkflow/setvalue(_:forvariablewithname:))

# setValue(\_:forVariableWithName:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Sets the value of the workflow variable with the specified name.

## Declaration

```swift
func setValue(_ value: Any?, forVariableWithName variableName: String) -> Bool
```

## Parameters

- `value`: The value to set for the named variable.
- `variableName`: The name of a variable to set the value for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `variableName` was found and its value is set; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does nothing if the variable specified by `variableName` is not found.

# setValue:forVariableWithName: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Sets the value of the workflow variable with the specified name.

## Declaration

```objectivec
- (BOOL) setValue:(id) value forVariableWithName:(NSString *) variableName;
```

## Parameters

- `value`: The value to set for the named variable.
- `variableName`: The name of a variable to set the value for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `variableName` was found and its value is set; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does nothing if the variable specified by `variableName` is not found.
