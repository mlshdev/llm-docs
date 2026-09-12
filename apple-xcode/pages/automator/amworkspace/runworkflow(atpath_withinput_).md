> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkspace/runworkflow(atpath:withinput:)](https://developer.apple.com/documentation/automator/amworkspace/runworkflow(atpath:withinput:))

# runWorkflow(atPath:withInput:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Loads and runs the specified workflow file.

## Declaration

```swift
func runWorkflow(atPath path: String!, withInput input: Any!) throws -> Any
```

## Parameters

- `path`: A path that specifies the location of the workflow file.
- `input`: The input for the first action in the workflow. Pass `nil` if the first action doesn’t need input.

<a id="return-value"></a>

## Return Value

`nil` if an error occurs or if the action completes successfully without producing output; otherwise, the output of the last action in the workflow.

# runWorkflowAtPath:withInput:error: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Loads and runs the specified workflow file.

## Declaration

```objectivec
- (id) runWorkflowAtPath:(NSString *) path withInput:(id) input error:(NSError **) error;
```

## Parameters

- `path`: A path that specifies the location of the workflow file.
- `input`: The input for the first action in the workflow. Pass `nil` if the first action doesn’t need input.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`nil` if an error occurs or if the action completes successfully without producing output; otherwise, the output of the last action in the workflow.
