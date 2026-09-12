> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserrorrecoveryattempting](https://developer.apple.com/documentation/foundation/nserrorrecoveryattempting)

# NSErrorRecoveryAttempting (Swift)

**Framework:** Foundation

A set of methods that provide options to recover from an error.

<a id="overview"></a>

## Overview

The `NSErrorRecoveryAttempting` informal protocol provides methods that allow your application to attempt to recover from an error. These methods are invoked when an `NSError` object is returned that specifies the implementing object as the error `recoveryAttempter` and the user has selected one of the error’s localized recovery options. The method invoked depends on how the error is presented to the user. If the error is presented in a document-modal sheet, [attemptRecovery(fromError:optionIndex:delegate:didRecoverSelector:contextInfo:)](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_delegate_didrecoverselector_contextinfo_%29.md) is invoked. If the error is presented in an application-modal dialog, [attemptRecovery(fromError:optionIndex:)](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_%29.md) is invoked.

## Topics

### Attempting Recovery From Errors

- [attemptRecovery(fromError:optionIndex:delegate:didRecoverSelector:contextInfo:)](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_delegate_didrecoverselector_contextinfo_%29.md): Implemented to attempt a recovery from an error noted in a document-modal sheet.
- [attemptRecovery(fromError:optionIndex:)](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_%29.md): Implemented to attempt a recovery from an error noted in an application-modal dialog.

## See Also

### Getting the Error Recovery Attempter

- [recoveryAttempter](nserror/recoveryattempter.md): The object in the user info dictionary corresponding to the [NSRecoveryAttempterErrorKey](nsrecoveryattemptererrorkey.md) key.

# NSErrorRecoveryAttempting (Objective-C)

**Framework:** Foundation

A set of methods that provide options to recover from an error.

<a id="overview"></a>

## Overview

The `NSErrorRecoveryAttempting` informal protocol provides methods that allow your application to attempt to recover from an error. These methods are invoked when an `NSError` object is returned that specifies the implementing object as the error `recoveryAttempter` and the user has selected one of the error’s localized recovery options. The method invoked depends on how the error is presented to the user. If the error is presented in a document-modal sheet, [attemptRecoveryFromError:optionIndex:delegate:didRecoverSelector:contextInfo:](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_delegate_didrecoverselector_contextinfo_%29.md) is invoked. If the error is presented in an application-modal dialog, [attemptRecoveryFromError:optionIndex:](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_%29.md) is invoked.

## Topics

### Attempting Recovery From Errors

- [attemptRecoveryFromError:optionIndex:delegate:didRecoverSelector:contextInfo:](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_delegate_didrecoverselector_contextinfo_%29.md): Implemented to attempt a recovery from an error noted in a document-modal sheet.
- [attemptRecoveryFromError:optionIndex:](../objectivec/nsobject-swift.class/attemptrecovery%28fromerror_optionindex_%29.md): Implemented to attempt a recovery from an error noted in an application-modal dialog.

## See Also

### Getting the Error Recovery Attempter

- [recoveryAttempter](nserror/recoveryattempter.md): The object in the user info dictionary corresponding to the [NSRecoveryAttempterErrorKey](nsrecoveryattemptererrorkey.md) key.
