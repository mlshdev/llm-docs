> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsuserautomatortask/variables

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
