> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformactioncanexecute](https://developer.apple.com/documentation/security/ksectransformactioncanexecute)

# kSecTransformActionCanExecute (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers to verify that all required attributes are either set or connected to another transform.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionCanExecute: CFString
```

<a id="Discussion"></a>

## Discussion

Overrides the standard behavior that checks to see if all of the required attributes either have been set or are connected to another transform. When overriding the default behavior the developer can decided what the necessary data is to have for a transform to be considered ‘ready to run’. Returning NULL means that the transform is ready to be run. If the transform is NOT ready to run then the override should return a CFErrorRef stipulating the error.

# kSecTransformActionCanExecute (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers to verify that all required attributes are either set or connected to another transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionCanExecute;
```

<a id="Discussion"></a>

## Discussion

Overrides the standard behavior that checks to see if all of the required attributes either have been set or are connected to another transform. When overriding the default behavior the developer can decided what the necessary data is to have for a transform to be considered ‘ready to run’. Returning NULL means that the transform is ready to be run. If the transform is NOT ready to run then the override should return a CFErrorRef stipulating the error.
