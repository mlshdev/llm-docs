> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodercreate(_:)](https://developer.apple.com/documentation/security/cmsencodercreate(_:))

# CMSEncoderCreate(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a CMSEncoder reference.

## Declaration

```swift
func CMSEncoderCreate(_ cmsEncoderOut: UnsafeMutablePointer<CMSEncoder?>) -> OSStatus
```

## Parameters

- `cmsEncoderOut`: On return, points to a CMSEncoder reference. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This is the first function in a sequence of encoder functions that you call to sign or encrypt a message. The other functions in the sequence require you to pass in the CMSEncoder reference returned by this function. In many cases, you can call the [CMSEncode](cmsencode.md) function alone instead of this sequence of encoder functions.

# CMSEncoderCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a CMSEncoder reference.

## Declaration

```objectivec
OSStatus CMSEncoderCreate(CMSEncoderRef*cmsEncoderOut);
```

## Parameters

- `cmsEncoderOut`: On return, points to a CMSEncoder reference. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This is the first function in a sequence of encoder functions that you call to sign or encrypt a message. The other functions in the sequence require you to pass in the CMSEncoder reference returned by this function. In many cases, you can call the [CMSEncode](cmsencode.md) function alone instead of this sequence of encoder functions.
