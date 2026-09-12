> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitfactory/createaudiounit(with:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitfactory/createaudiounit(with:))

# createAudioUnit(with:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates an instance of an extension’s audio unit.

## Declaration

```swift
func createAudioUnit(with desc: AudioComponentDescription) throws -> AUAudioUnit
```

## Parameters

- `desc`: The description of the audio component.

<a id="return-value"></a>

## Return Value

An instance of the extension’s audio unit.

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](../rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="Discussion"></a>

## Discussion

This method is called only once per factory instance.

> **Note**

>  In non-ARC code, “create” methods return unretained objects (unlike C “create” functions). In this scenario, you should return an object with a reference count of 1, but autoreleased.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# createAudioUnitWithComponentDescription:error: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates an instance of an extension’s audio unit.

## Declaration

```objectivec
- (AUAudioUnit *) createAudioUnitWithComponentDescription:(AudioComponentDescription) desc error:(NSError **) error;
```

## Parameters

- `desc`: The description of the audio component.
- `error`: An error if the operation failed.

<a id="return-value"></a>

## Return Value

An instance of the extension’s audio unit. On failure, this method returns `nil`.

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](../rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="Discussion"></a>

## Discussion

This method is called only once per factory instance.

> **Note**

>  In non-ARC code, “create” methods return unretained objects (unlike C “create” functions). In this scenario, you should return an object with a reference count of 1, but autoreleased.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
