> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/attemptrecovery(fromerror:optionindex:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/attemptrecovery(fromerror:optionindex:))

# attemptRecovery(fromError:optionIndex:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Implemented to attempt a recovery from an error noted in an application-modal dialog.

## Declaration

```swift
func attemptRecovery(fromError error: any Error, optionIndex recoveryOptionIndex: Int) -> Bool
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object that describes the error, including error recovery options.
- `recoveryOptionIndex`: The index of the user selected recovery option in `error`’s localized recovery array.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the error recovery was completed successfully, [NO](../no.md) otherwise.

<a id="Discussion"></a>

## Discussion

Invoked when an error alert is been presented to the user in an application-modal dialog, and the user has selected an error recovery option specified by `error`.

# attemptRecoveryFromError:optionIndex: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Implemented to attempt a recovery from an error noted in an application-modal dialog.

## Declaration

```objectivec
- (BOOL) attemptRecoveryFromError:(NSError *) error optionIndex:(NSUInteger) recoveryOptionIndex;
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object that describes the error, including error recovery options.
- `recoveryOptionIndex`: The index of the user selected recovery option in `error`’s localized recovery array.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the error recovery was completed successfully, [NO](../no.md) otherwise.

<a id="Discussion"></a>

## Discussion

Invoked when an error alert is been presented to the user in an application-modal dialog, and the user has selected an error recovery option specified by `error`.
