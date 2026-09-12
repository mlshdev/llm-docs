> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/cancellableintent](https://developer.apple.com/documentation/appintents/cancellableintent)

# CancellableIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

An interface to support the graceful cancellation of your app intent’s task.

## Declaration

```swift
protocol CancellableIntent : AppIntent
```

## Mentioned In

- [Creating your first app intent](creating-your-first-app-intent.md)

<a id="overview"></a>

## Overview

This protocol adds cancellation support to your app intent types. Use it to let the system know that you need additional time to perform cleanup operations when your app intent receives a cancellation notification. To use this protocol, use the [withIntentCancellationHandler(operation:onCancel:isolation:)](cancellableintent/withintentcancellationhandler%28operation_oncancel_isolation_%29.md) method to wrap your app intent’s task. With this method in place, the system gives your code extra time to handle cancellation before the app intent’s task ends.

The system can cancel an app intent for the following reasons:

- The app intent didn’t report progress and exceeded its 30-second runtime limit.
- Someone monitoring the progress of the app intent in Siri, Live Activities, or Shortcuts chose to cancel the task.

Swift provides the standard [withTaskCancellationHandler(handler:operation:)](https://developer.apple.com/documentation/swift/withtaskcancellationhandler%28handler:operation:%29) function for tasks to handle cancellation. You can use that function in your app intent’s [perform()](appintent/perform%28%29.md) method to perform any cleanup tasks if you don’t need to know the reason cancellation occurred. If you want to know the reason for cancellation, use the [withIntentCancellationHandler(operation:onCancel:isolation:)](cancellableintent/withintentcancellationhandler%28operation_oncancel_isolation_%29.md) method that this protocol offers instead. When cancellation occurs, stop your app intent’s current task, release any allocated memory or resources, save intermediate state as needed, and write out any relevant diagnostic information related to the cancellation.

The following example shows a payment-processing app intent and the basic code it uses to perform its task. The app intent’s [perform()](appintent/perform%28%29.md) method calls the [withIntentCancellationHandler(operation:onCancel:isolation:)](cancellableintent/withintentcancellationhandler%28operation_oncancel_isolation_%29.md) method to process the payment and handle cancellation if it occurs. The cancellation handler performs different tasks based on whether the someone canceled the operation deliberately or the system timed out.

```swift
enum PaymentMethod: String, AppEnum {
    case creditCard
    case debitCard

    static var typeDisplayRepresentation = TypeDisplayRepresentation(name: "Payment Method")
    static var caseDisplayRepresentations: [PaymentMethod: DisplayRepresentation] = [
        .creditCard: "Credit Card",
        .debitCard: "Debit Card"
    ]
}

class PaymentService {
    func initiateTransaction(_ id: UUID, amount: Decimal) async throws {
        // Initiate payment transaction
    }

    func authorize(_ id: UUID, method: PaymentMethod) async throws {
        // Authorize payment
    }

    func process(_ id: UUID) async throws {
        // Process payment
    }

    func rollback(_ id: UUID, reason: String) async throws {
        // Roll back transaction
    }

    func cancel(_ id: UUID, reason: String) async throws {
        // Cancel transaction
    }
}

struct ProcessPaymentIntent: AppIntent, ProgressReportingIntent, CancellableIntent {
    static var title: LocalizedStringResource = "Process Payment"

    @Parameter var amount: Decimal
    @Parameter var paymentMethod: PaymentMethod

    private let paymentService = PaymentService()

    func perform() async throws -> some IntentResult & ProvidesDialog {
        let transactionID = UUID()

        return try await withIntentCancellationHandler {
            updateProgress(fractionCompleted: 0.0, message: "Initiating payment...")
            try await paymentService.initiateTransaction(transactionID, amount: amount)

            updateProgress(fractionCompleted: 0.3, message: "Authorizing payment...")
            try await paymentService.authorize(transactionID, method: paymentMethod)

            updateProgress(fractionCompleted: 0.7, message: "Processing payment...")
            try await paymentService.process(transactionID)

            updateProgress(fractionCompleted: 1.0, message: "Payment complete")
            return .result(dialog: "Payment of \(amount) processed successfully")
        } onCancel: { reason in
            Task {
                switch reason {
                case .timeout:
                    try? await paymentService.rollback(transactionID, reason: "timeout")
                case .userCancelled:
                    try? await paymentService.cancel(transactionID, reason: "user_cancelled")
                default:
                    try? await paymentService.cancel(transactionID, reason: "unknown")
                }
            }
        }
    }
}
```

> **Important**

> Design your cancellation handlers to finish their tasks quickly. On all platforms except macOS, the system can still suspend the process shortly after cancellation. However, supporting this protocol provides additional time compared to app intents that don’t support this protocol.

## Topics

### Cancelling the intent

- [withIntentCancellationHandler(operation:onCancel:isolation:)](cancellableintent/withintentcancellationhandler%28operation_oncancel_isolation_%29.md): Runs an operation with a cancellation handler that receives a cancellation reason.
- [IntentCancellationReason](intentcancellationreason.md): Reasons for the cancellation of an app intent’s operation.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Add-on behaviors

- [UndoableIntent](undoableintent.md): An interface you use to register undoable actions in your app intent code.
- [LongRunningIntent](longrunningintent.md): An interface you use to extend the background execution time of an app intent that performs a long-running task.
- [PredictableIntent](predictableintent.md): An interface that indicates the system can suggest the intent as a potential action to run.
- [IntentPrediction](intentprediction.md): A prediction for an app intent that the system might display to someone when it’s relevant.
