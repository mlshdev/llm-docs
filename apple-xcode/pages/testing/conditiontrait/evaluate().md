> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/conditiontrait/evaluate()](https://developer.apple.com/documentation/testing/conditiontrait/evaluate())

# evaluate()

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Evaluate this instance’s underlying condition.

## Declaration

```swift
func evaluate() async throws -> Bool
```

<a id="return-value"></a>

## Return Value

The result of evaluating this instance’s underlying condition.

<a id="discussion"></a>

## Discussion

The evaluation is performed each time this function is called, and is not cached.
