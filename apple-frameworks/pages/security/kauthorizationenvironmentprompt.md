> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/kauthorizationenvironmentprompt

# kAuthorizationEnvironmentPrompt (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The type for an authorization item containing the name of the item that should be passed into the environment when specifying invocation-specific additional text.

## Declaration

```swift
var kAuthorizationEnvironmentPrompt: String { get }
```

<a id="Discussion"></a>

## Discussion

The value should be a localized UTF-8 string.

# kAuthorizationEnvironmentPrompt (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The type for an authorization item containing the name of the item that should be passed into the environment when specifying invocation-specific additional text.

## Declaration

```objectivec
#define kAuthorizationEnvironmentPrompt
```

<a id="Discussion"></a>

## Discussion

The value should be a localized UTF-8 string.
