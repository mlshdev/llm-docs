> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserautomatortask/variables](https://developer.apple.com/documentation/foundation/nsuserautomatortask/variables)

# variables (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The variables required by the Automator workflow.

## Declaration

```swift
var variables: [String : Any]? { get set }
```

## See Also

### Executing Automator Tasks

- [execute(withInput:completionHandler:)](execute%28withinput_completionhandler_%29.md): Execute the Automator workflow by providing it as securely coded input.

# variables (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The variables required by the Automator workflow.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * variables;
```

## See Also

### Executing Automator Tasks

- [executeWithInput:completionHandler:](execute%28withinput_completionhandler_%29.md): Execute the Automator workflow by providing it as securely coded input.
