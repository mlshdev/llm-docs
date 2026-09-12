> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/didfinishrunningwitherror:](https://developer.apple.com/documentation/automator/amaction/didfinishrunningwitherror:)

# didFinishRunningWithError:

**Interface language:** Objective-C

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+ (deprecated in 10.5)

Sent by the action to itself when it has finished running asynchronously.

> Use [finishRunningWithError:](finishrunningwitherror%28__%29.md) instead.

## Declaration

```objectivec
- (void) didFinishRunningWithError:(NSDictionary<NSString *,id> *) errorInfo;
```

## Parameters

- `errorInfo`: If an error occurred during asynchronous running of the action, upon return contains an instance of `NSError` that describes the problem.

<a id="Discussion"></a>

## Discussion

An action that overrides [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md) should invoke `didFinishRunningWithError:` on completion, so that Automator can resume running the workflow that the action is part of.

## See Also

### Deprecated

- [runWithInput:fromAction:error:](runwithinput_fromaction_error_.md): Deprecated. Requests the action to perform its task using the specified input from the specified action.
