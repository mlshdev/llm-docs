> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-39wfu](https://developer.apple.com/documentation/appintents/intentprediction/init(parameters:displayrepresentation:)-39wfu)

# init(parameters:displayRepresentation:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
init<V0, V1, P0, P1, K0, K1>(parameters: T, displayRepresentation: @escaping (V0, V1) -> DisplayRepresentation) where T == (K0, K1), V0 : _IntentValue, V0 : Sendable, V1 : _IntentValue, V1 : Sendable, P0 : IntentParameter<V0>, P1 : IntentParameter<V1>, K0 : KeyPath<Intent, P0>, K1 : KeyPath<Intent, P1>
```

## See Also

### Creating a prediction

- [init(displayRepresentation:)](init%28displayrepresentation_%29.md)
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-1zdkp.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-2ct6i.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-2lf5t.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-2lf5t.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-3wlt7.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-5f3e3.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-620xt.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-6i80a.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-781f1.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-8b851.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-9ibp3.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](init%28parameters_displayrepresentation_%29-alik.md): Conforms when `Intent` conforms to `AppIntent`.
