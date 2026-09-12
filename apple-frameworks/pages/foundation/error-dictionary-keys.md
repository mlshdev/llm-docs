> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/error-dictionary-keys](https://developer.apple.com/documentation/foundation/error-dictionary-keys)

# Error Dictionary Keys (Swift)

**Framework:** Foundation  
**Kind:** API Collection

If the result of [init(contentsOf:error:)](nsapplescript/init%28contentsof_error_%29.md), [compileAndReturnError(\_:)](nsapplescript/compileandreturnerror%28__%29.md), [executeAndReturnError(\_:)](nsapplescript/executeandreturnerror%28__%29.md), or [executeAppleEvent(\_:error:)](nsapplescript/executeappleevent%28__error_%29.md), signals failure (`nil`, [false](https://developer.apple.com/documentation/swift/false), `nil`, or `nil`, respectively), a pointer to an autoreleased dictionary is put at the location pointed to by the error parameter. The error info dictionary may contain entries that use any combination of the following keys, including no entries at all.

## Topics

### Constants

- [errorMessage](nsapplescript/errormessage.md): An `NSString` that supplies a detailed description of the error condition.
- [errorNumber](nsapplescript/errornumber.md): An `NSNumber` that specifies the error number.
- [errorAppName](nsapplescript/errorappname.md): An `NSString` that specifies the name of the application that generated the error.
- [errorBriefMessage](nsapplescript/errorbriefmessage.md): An `NSString` that provides a brief description of the error.
- [errorRange](nsapplescript/errorrange.md): An `NSValue` that specifies a range.

# Error Dictionary Keys (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

If the result of [initWithContentsOfURL:error:](nsapplescript/init%28contentsof_error_%29.md), [compileAndReturnError:](nsapplescript/compileandreturnerror%28__%29.md), [executeAndReturnError:](nsapplescript/executeandreturnerror%28__%29.md), or [executeAppleEvent:error:](nsapplescript/executeappleevent%28__error_%29.md), signals failure (`nil`, [false](https://developer.apple.com/documentation/swift/false), `nil`, or `nil`, respectively), a pointer to an autoreleased dictionary is put at the location pointed to by the error parameter. The error info dictionary may contain entries that use any combination of the following keys, including no entries at all.

## Topics

### Constants

- [NSAppleScriptErrorMessage](nsapplescript/errormessage.md): An `NSString` that supplies a detailed description of the error condition.
- [NSAppleScriptErrorNumber](nsapplescript/errornumber.md): An `NSNumber` that specifies the error number.
- [NSAppleScriptErrorAppName](nsapplescript/errorappname.md): An `NSString` that specifies the name of the application that generated the error.
- [NSAppleScriptErrorBriefMessage](nsapplescript/errorbriefmessage.md): An `NSString` that provides a brief description of the error.
- [NSAppleScriptErrorRange](nsapplescript/errorrange.md): An `NSValue` that specifies a range.
