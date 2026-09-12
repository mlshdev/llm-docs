> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/evaluating-a-boolean-value](https://developer.apple.com/documentation/appstoreconnectapi/evaluating-a-boolean-value)

# Evaluating a Boolean value

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return given values for true and false results of a conditional.

<a id="overview"></a>

## Overview

Use the `if()` function in the expression of a matchmaking rule to return values depending on a Boolean conditional. For example, `if (true, `0.0`, `1.0`)` returns `0.0`, and `if (false, `0.0`, `1.0`)` returns `1.0`.

<a id="Declaration"></a>

### Declaration

```swift
any if(boolean $condition, any $ifTrue, any $ifFalse)
```

<a id="Parameters"></a>

### Parameters

-`condition`: An expression that evaluates to a Boolean value. -`ifTrue`: The value to return if `condition` is `true`. -`ifFalse`: The value to return if `condition` is `false`.

<a id="Return-value"></a>

### Return value

Returns `ifTrue` if `condition` is `true`; otherwise, `ifFalse`.
