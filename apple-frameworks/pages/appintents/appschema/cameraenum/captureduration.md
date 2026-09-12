> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/cameraenum/captureduration](https://developer.apple.com/documentation/appintents/appschema/cameraenum/captureduration)

# captureDuration

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An enum schema for a capture duration parameter.

## Declaration

```swift
var captureDuration: some AppSchemaEnum { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s parameter types available to Apple Intelligence, conform your [AppEnum](../../appenum.md) to a schema that describes a parameter’s possible values to the system. If your app’s functionality aligns with the `camera` domain and a parameter type matches the `captureDuration` schema, you can generate the protocol conformance the schema requires for your app enum implementation with the `@AppEnum( .camera.captureDuration)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app enum that conforms to the `captureDuration` schema:

```swift
@AppEnum(schema: .camera.captureDuration)
enum CaptureDuration: String {
    case <#CaptureDuration Case#>

    static let caseDisplayRepresentations: [Self: DisplayRepresentation] = [
        <#DisplayRepresentations#>
    ]
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Types for static parameters

- [captureDevice](capturedevice.md): An enum schema for a capture device parameter.
- [captureMode](capturemode.md): An enum schema for a capture mode parameter.
- [AppSchema.CameraEnum](../cameraenum.md): Identifies enum schemas in the camera domain.
