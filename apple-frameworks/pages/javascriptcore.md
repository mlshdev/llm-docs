> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore](https://developer.apple.com/documentation/javascriptcore)

# JavaScriptCore (Swift)

**Framework:** JavaScriptCore  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Evaluate JavaScript programs from within an app, and support JavaScript scripting of your app.

<a id="overview"></a>

## Overview

The JavaScriptCore framework provides the ability to evaluate JavaScript programs from within Swift, Objective-C, and C-based apps. You can use also use JavaScriptCore to insert custom objects into the JavaScript environment.

## Topics

### Execution Environment

- [JSVirtualMachine](javascriptcore/jsvirtualmachine.md): A self-contained environment for JavaScript execution.
- [JSContext](javascriptcore/jscontext.md): A JavaScript execution environment.

### JavaScript Code

- [JSValue](javascriptcore/jsvalue.md): A JavaScript value.
- [JSManagedValue](javascriptcore/jsmanagedvalue.md): A JavaScript value with conditional retain behavior to provide automatic memory management.

### Native Code

- [JSExport](javascriptcore/jsexport.md): The protocol for exporting Objective-C objects to JavaScript.

### C API

- [C JavaScriptCore API](javascriptcore/c-javascriptcore-api.md): Browse the alternative C-based APIs for JavaScriptCore.

### Reference

- [JavaScriptCore Constants](javascriptcore/javascriptcore-constants.md)

### Variables

- [kJSTypeBigInt](javascriptcore/kjstypebigint.md)

### Functions

- [JSBigIntCreateWithDouble(\_:\_:\_:)](javascriptcore/jsbigintcreatewithdouble%28______%29.md)
- [JSBigIntCreateWithInt64(\_:\_:\_:)](javascriptcore/jsbigintcreatewithint64%28______%29.md)
- [JSBigIntCreateWithString(\_:\_:\_:)](javascriptcore/jsbigintcreatewithstring%28______%29.md)
- [JSBigIntCreateWithUInt64(\_:\_:\_:)](javascriptcore/jsbigintcreatewithuint64%28______%29.md)
- [JSValueCompare(\_:\_:\_:\_:)](javascriptcore/jsvaluecompare%28________%29.md)
- [JSValueCompareDouble(\_:\_:\_:\_:)](javascriptcore/jsvaluecomparedouble%28________%29.md)
- [JSValueCompareInt64(\_:\_:\_:\_:)](javascriptcore/jsvaluecompareint64%28________%29.md)
- [JSValueCompareUInt64(\_:\_:\_:\_:)](javascriptcore/jsvaluecompareuint64%28________%29.md)
- [JSValueIsBigInt(\_:\_:)](javascriptcore/jsvalueisbigint%28____%29.md)
- [JSValueToInt32(\_:\_:\_:)](javascriptcore/jsvaluetoint32%28______%29.md)
- [JSValueToInt64(\_:\_:\_:)](javascriptcore/jsvaluetoint64%28______%29.md)
- [JSValueToUInt32(\_:\_:\_:)](javascriptcore/jsvaluetouint32%28______%29.md)
- [JSValueToUInt64(\_:\_:\_:)](javascriptcore/jsvaluetouint64%28______%29.md)

### Enumerations

- [JSRelationCondition](javascriptcore/jsrelationcondition.md)

# JavaScriptCore (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Evaluate JavaScript programs from within an app, and support JavaScript scripting of your app.

<a id="overview"></a>

## Overview

The JavaScriptCore framework provides the ability to evaluate JavaScript programs from within Swift, Objective-C, and C-based apps. You can use also use JavaScriptCore to insert custom objects into the JavaScript environment.

## Topics

### Execution Environment

- [JSVirtualMachine](javascriptcore/jsvirtualmachine.md): A self-contained environment for JavaScript execution.
- [JSContext](javascriptcore/jscontext.md): A JavaScript execution environment.

### JavaScript Code

- [JSValue](javascriptcore/jsvalue.md): A JavaScript value.
- [JSManagedValue](javascriptcore/jsmanagedvalue.md): A JavaScript value with conditional retain behavior to provide automatic memory management.

### Native Code

- [JSExport](javascriptcore/jsexport.md): The protocol for exporting Objective-C objects to JavaScript.

### C API

- [C JavaScriptCore API](javascriptcore/c-javascriptcore-api.md): Browse the alternative C-based APIs for JavaScriptCore.

### Reference

- [JavaScriptCore Constants](javascriptcore/javascriptcore-constants.md)

### Functions

- [JSBigIntCreateWithDouble](javascriptcore/jsbigintcreatewithdouble%28______%29.md)
- [JSBigIntCreateWithInt64](javascriptcore/jsbigintcreatewithint64%28______%29.md)
- [JSBigIntCreateWithString](javascriptcore/jsbigintcreatewithstring%28______%29.md)
- [JSBigIntCreateWithUInt64](javascriptcore/jsbigintcreatewithuint64%28______%29.md)
- [JSValueCompare](javascriptcore/jsvaluecompare%28________%29.md)
- [JSValueCompareDouble](javascriptcore/jsvaluecomparedouble%28________%29.md)
- [JSValueCompareInt64](javascriptcore/jsvaluecompareint64%28________%29.md)
- [JSValueCompareUInt64](javascriptcore/jsvaluecompareuint64%28________%29.md)
- [JSValueIsBigInt](javascriptcore/jsvalueisbigint%28____%29.md)
- [JSValueToInt32](javascriptcore/jsvaluetoint32%28______%29.md)
- [JSValueToInt64](javascriptcore/jsvaluetoint64%28______%29.md)
- [JSValueToUInt32](javascriptcore/jsvaluetouint32%28______%29.md)
- [JSValueToUInt64](javascriptcore/jsvaluetouint64%28______%29.md)

### Macros

- [JSC_ASSUME_NONNULL_BEGIN](javascriptcore/jsc_assume_nonnull_begin.md)
- [JSC_ASSUME_NONNULL_END](javascriptcore/jsc_assume_nonnull_end.md)
- [JSC_CF_ENUM](javascriptcore/jsc_cf_enum.md)
- [JSC_NONNULL](javascriptcore/jsc_nonnull.md)
- [JSC_NULLABLE](javascriptcore/jsc_nullable.md)
- [JSC_NULL_UNSPECIFIED](javascriptcore/jsc_null_unspecified.md)

### Enumerations

- [JSRelationCondition](javascriptcore/jsrelationcondition.md)
