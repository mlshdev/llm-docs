> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifeedbackgenerator/prepare()](https://developer.apple.com/documentation/uikit/uifeedbackgenerator/prepare())

# prepare() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Prepares the generator to trigger feedback.

## Declaration

```swift
func prepare()
```

<a id="Discussion"></a>

## Discussion

When you call this method, the generator is placed into a prepared state for a short period of time. While the generator is prepared, you can trigger feedback with lower latency.

Think about when you can best prepare your generators. Call [prepare()](prepare%28%29.md) before the event that triggers feedback. The system needs time to prepare the Taptic Engine for minimal latency. Calling [prepare()](prepare%28%29.md) and then immediately triggering feedback (without any time in between) does not improve latency.

To conserve power, the Taptic Engine returns to an idle state after any of the following events:

- You trigger feedback on the generator.
- A short period of time passes (typically seconds).
- The generator is deallocated.

After feedback is triggered, the Taptic Engine returns to its idle state. If you might trigger additional feedback within the next few seconds, immediately call [prepare()](prepare%28%29.md) to keep the Taptic Engine in the prepared state.

You can also extend the prepared state by repeatedly calling the [prepare()](prepare%28%29.md) method. However, if you continue calling [prepare()](prepare%28%29.md) without ever triggering feedback, the system may eventually place the Taptic Engine back in an idle state and ignore any further [prepare()](prepare%28%29.md) calls until after you trigger feedback at least once.

If you no longer need a prepared generator, remove all references to the generator object and let the system deallocate it. This lets the Taptic Engine return to its idle state.

> **Note**

>  The [prepare()](prepare%28%29.md) method is optional; however, it is highly recommended. Calling this method helps ensure that your feedback has the lowest possible latency.

## See Also

### Related Documentation

- [selectionChanged()](../uiselectionfeedbackgenerator/selectionchanged%28%29.md): Triggers selection feedback.
- [impactOccurred()](../uiimpactfeedbackgenerator/impactoccurred%28%29.md): Triggers impact feedback.
- [notificationOccurred(\_:)](../uinotificationfeedbackgenerator/notificationoccurred%28__%29.md): Triggers notification feedback.

# prepare (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Prepares the generator to trigger feedback.

## Declaration

```objectivec
- (void) prepare;
```

<a id="Discussion"></a>

## Discussion

When you call this method, the generator is placed into a prepared state for a short period of time. While the generator is prepared, you can trigger feedback with lower latency.

Think about when you can best prepare your generators. Call [prepare](prepare%28%29.md) before the event that triggers feedback. The system needs time to prepare the Taptic Engine for minimal latency. Calling [prepare](prepare%28%29.md) and then immediately triggering feedback (without any time in between) does not improve latency.

To conserve power, the Taptic Engine returns to an idle state after any of the following events:

- You trigger feedback on the generator.
- A short period of time passes (typically seconds).
- The generator is deallocated.

After feedback is triggered, the Taptic Engine returns to its idle state. If you might trigger additional feedback within the next few seconds, immediately call [prepare](prepare%28%29.md) to keep the Taptic Engine in the prepared state.

You can also extend the prepared state by repeatedly calling the [prepare](prepare%28%29.md) method. However, if you continue calling [prepare](prepare%28%29.md) without ever triggering feedback, the system may eventually place the Taptic Engine back in an idle state and ignore any further [prepare](prepare%28%29.md) calls until after you trigger feedback at least once.

If you no longer need a prepared generator, remove all references to the generator object and let the system deallocate it. This lets the Taptic Engine return to its idle state.

> **Note**

>  The [prepare](prepare%28%29.md) method is optional; however, it is highly recommended. Calling this method helps ensure that your feedback has the lowest possible latency.

## See Also

### Related Documentation

- [selectionChanged](../uiselectionfeedbackgenerator/selectionchanged%28%29.md): Triggers selection feedback.
- [impactOccurred](../uiimpactfeedbackgenerator/impactoccurred%28%29.md): Triggers impact feedback.
- [notificationOccurred:](../uinotificationfeedbackgenerator/notificationoccurred%28__%29.md): Triggers notification feedback.
