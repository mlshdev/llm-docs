> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/perform()](https://developer.apple.com/documentation/appintents/appintent/perform())

# perform()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Performs the intent’s action and returns a result, after resolving any parameters.

## Declaration

```swift
func perform() async throws -> Self.PerformResult
```

<a id="return-value"></a>

## Return Value

The result of the action. You can use the result to tell the system to perform additional actions. For example, include an `OpensAppIntent` type if you want the system to open your app and perform another action. You can also provide the system with dialog and snippet content along with the result.

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)
- [Creating your first app intent](../creating-your-first-app-intent.md)
- [Directing app intents to your app’s scenes](../directing-app-intents-to-your-apps-scenes.md)
- [Configuring the runtime behavior of your app intents](../configuring-the-runtime-behavior-of-your-app-intents.md)
- [Getting started with the App Intents framework](../getting-started-with-the-app-intents-framework.md)

<a id="discussion"></a>

## Discussion

Implement this method in your custom type to perform the action in your app. Return a result or throw error to indicate the success or failure of the action.

Before calling this method, the system resolves your app intent’s parameters to known values. Use your implementation to perform the action using the provided information and deliver a result back to the system. At any point in your implementation, you can also use methods of the [AppIntent](../appintent.md) protocol to request confirmation or ask someone to choose from a set of options you provide.

For information about how to implement this method, see [Creating your first app intent](../creating-your-first-app-intent.md).

## Default Implementations

### AppIntent Implementations

- [perform()](perform%28%29-1zvwi.md): Conforms when `Self` conforms to `OpenIntent`.
- [perform()](perform%28%29-2523c.md)
- [perform()](perform%28%29-28etm.md): Conforms when `Self` conforms to `OpenIntent` and `Value` conforms to `URLRepresentableEntity`.
- [perform()](perform%28%29-39thw.md): A default implementation that throws an error rather than perform an intent.
- [perform()](perform%28%29-5jtv1.md): Conforms when `Self` conforms to `OpenIntent` and `Value` conforms to `URLRepresentableEnum`.
- [perform()](perform%28%29-5wt2l.md)
- [perform()](perform%28%29-pjg0.md)
- [perform()](perform%28%29-rp9j.md)

### UISceneAppIntent Implementations

- [perform()](../uisceneappintent/perform%28%29-9wmom.md)
- [perform()](../uisceneappintent/perform%28%29-s290.md): Conforms when `Self` conforms to `OpenIntent`.

## See Also

### Performing the action

- [systemContext](systemcontext.md): Contextual information that the system provides while it performs the app intent.
- [PerformResult](performresult.md)
