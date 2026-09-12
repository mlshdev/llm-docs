> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtregisterprofessionalvideoworkflowformatreaders()](https://developer.apple.com/documentation/mediatoolbox/mtregisterprofessionalvideoworkflowformatreaders())

# MTRegisterProfessionalVideoWorkflowFormatReaders() (Swift)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** macOS 10.10+

Enables the use of media format readers that support professional video workflows.

## Declaration

```swift
func MTRegisterProfessionalVideoWorkflowFormatReaders()
```

<a id="Overview"></a>

## Overview

Call this function to indicate to Media Toolbox that your app requires support for [MediaExtension](https://developer.apple.com/documentation/mediaextension) format readers.

> **Note**

> This functionality is only intended for apps that support professional video workflows. It isn’t recommended for network-facing applications such as web browsers, messaging clients, mail clients, and so on.

By convention, format readers registered using this function should conform to the abstract [UTTypeReference](../uniformtypeidentifiers/uttypereference.md) of `com.apple.mediaextension-content` which in turn conforms to the abstract type `public.movie`. You can use `com.apple.mediaextension-content` to do type filtering (for example in Open… dialogs).

# MTRegisterProfessionalVideoWorkflowFormatReaders (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Function  
**Availability:** macOS 10.10+

Enables the use of media format readers that support professional video workflows.

## Declaration

```objectivec
extern void MTRegisterProfessionalVideoWorkflowFormatReaders();
```

<a id="Overview"></a>

## Overview

Call this function to indicate to Media Toolbox that your app requires support for [MediaExtension](https://developer.apple.com/documentation/mediaextension) format readers.

> **Note**

> This functionality is only intended for apps that support professional video workflows. It isn’t recommended for network-facing applications such as web browsers, messaging clients, mail clients, and so on.

By convention, format readers registered using this function should conform to the abstract [UTType](../uniformtypeidentifiers/uttypereference.md) of `com.apple.mediaextension-content` which in turn conforms to the abstract type `public.movie`. You can use `com.apple.mediaextension-content` to do type filtering (for example in Open… dialogs).
