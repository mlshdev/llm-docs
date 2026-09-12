> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivity/sessions()](https://developer.apple.com/documentation/groupactivities/groupactivity/sessions())

# sessions()

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the sessions for this activity as an asynchronous sequence.

## Declaration

```swift
static func sessions() -> Self.Sessions
```

<a id="return-value"></a>

## Return Value

An `AsyncSequence` type that contains the [GroupSession](../groupsession.md) objects for this activity.

<a id="discussion"></a>

## Discussion

Use this method to retrieve new sessions for the current activity. The method returns a sequence that may contain some or none of its values when you access it. The system adds an element to the sequence when the participant joins a new activity. It doesn’t update the sequence when properties of an active session change. For example, it doesn’t update the sequence when the state of the session changes.

Use a `for`-`in` loop to iterate over the values in the sequence. Preface your loop with `await` to receive each value asynchronously as it becomes available. To avoid blocking your code, perform the iteration from an asynchronous task in your app. The following example shows a typical way to call this method asynchronously:

```swift
async {
    for await newSession in MyActivity.sessions() {
       // Start a new activity.
    }
}
```

When a new session arrives, use it to prepare your app’s UI for the new activity.

## See Also

### Receiving an activity-related session

- [GroupActivity.Sessions](sessions.md): A type that provides asynchronous, sequential, iterated access to the sessions for the activity.
