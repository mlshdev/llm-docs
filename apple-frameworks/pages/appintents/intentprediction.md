> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentprediction](https://developer.apple.com/documentation/appintents/intentprediction)

# IntentPrediction

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A prediction for an app intent that the system might display to someone when it’s relevant.

## Declaration

```swift
struct IntentPrediction<Intent, T> where Intent : AppIntent
```

<a id="overview"></a>

## Overview

Use the `IntentPrediction` type to provide a description of your app intent that the system can use when offering proactive suggestions. You create this type from the [predictionConfiguration](predictableintent/predictionconfiguration.md) property of your app intent. Use the type to provide a [DisplayRepresentation](displayrepresentation.md) structure with a suitable description of your app intent’s purpose.

The following example shows an implementation of the [predictionConfiguration](predictableintent/predictionconfiguration.md) property that creates an `IntentPrediction` type. During creation of the type, the code passes the app intent’s `name` property to the `IntentPrediction` initializer, and maps it to the `name` parameter in the closure. The description incorporates this value in the text it provides.

```swift
struct CreateBook: AppIntent, PredictableIntent {
    @Parameter(title: "Book Name")
    var name: String?

    @Parameter(title: "Author", query: AuthorQuery.self)
    var author: AuthorEntity?

    static var predictionConfiguration: some IntentPredictionConfiguration {
        IntentPrediction(parameters: (\Self.$name)) { name in
            DisplayRepresentation(
                title: "Create a book named \(name)"
            )
        }
    }

    @MainActor
    func perform() async throws -> IntentResult<BookEntity> {
        ...
    }
}
```

## Topics

### Creating a prediction

- [init(displayRepresentation:)](intentprediction/init%28displayrepresentation_%29.md)
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-1zdkp.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-2ct6i.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-2lf5t.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-2lf5t.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-39wfu.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-3wlt7.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-5f3e3.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-620xt.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-6i80a.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-781f1.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-8b851.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-9ibp3.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-alik.md): Conforms when `Intent` conforms to `AppIntent`.

### Initializers

- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-1uup3.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-n8dp.md): Conforms when `Intent` conforms to `AppIntent`.
- [init(parameters:displayRepresentation:)](intentprediction/init%28parameters_displayrepresentation_%29-te8o.md): Conforms when `Intent` conforms to `AppIntent`.

## Relationships

### Conforms To

- [IntentPredictionConfiguration](intentpredictionconfiguration.md)

## See Also

### Add-on behaviors

- [UndoableIntent](undoableintent.md): An interface you use to register undoable actions in your app intent code.
- [CancellableIntent](cancellableintent.md): An interface to support the graceful cancellation of your app intent’s task.
- [LongRunningIntent](longrunningintent.md): An interface you use to extend the background execution time of an app intent that performs a long-running task.
- [PredictableIntent](predictableintent.md): An interface that indicates the system can suggest the intent as a potential action to run.
