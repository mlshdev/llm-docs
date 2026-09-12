> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection/sendsynchronousrequest(_:returning:)](https://developer.apple.com/documentation/foundation/nsurlconnection/sendsynchronousrequest(_:returning:))

# sendSynchronousRequest(\_:returning:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Performs a synchronous load of the specified URL request.

> Use \[NSURLSession dataTaskWithRequest:completionHandler:\] (see NSURLSession.h

## Declaration

```swift
class func sendSynchronousRequest(_ request: URLRequest, returning response: AutoreleasingUnsafeMutablePointer<URLResponse?>?) throws -> Data
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `response`: Out parameter for the URL response returned by the server.

<a id="return-value"></a>

## Return Value

The downloaded data for the URL request. Returns `nil` if a connection could not be created or if the download fails.

<a id="Discussion"></a>

## Discussion

A synchronous load is built on top of the asynchronous loading code made available by the class. The calling thread is blocked while the asynchronous loading system performs the URL load on a thread spawned specifically for this load request. No special threading or run loop configuration is necessary in the calling thread in order to perform a synchronous load.

> **Important**

>  Because this call can potentially take several minutes to complete (particularly when using a cellular network in iOS), you should never call this function from the main thread of your application. Doing so may cause a `0x8badf00d` exception with the main thread at `mach_msg_trap`. The solution is to migrate to URL loading using [URLSession](../urlsession.md).

If authentication is required in order to download the request, the required credentials must be specified as part of the URL. If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# sendSynchronousRequest:returningResponse:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Performs a synchronous load of the specified URL request.

> Use \[NSURLSession dataTaskWithRequest:completionHandler:\] (see NSURLSession.h

## Declaration

```objectivec
+ (NSData *) sendSynchronousRequest:(NSURLRequest *) request returningResponse:(NSURLResponse **) response error:(NSError **) error;
```

## Parameters

- `request`: The URL request to load. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `response`: Out parameter for the URL response returned by the server.
- `error`: Out parameter used if an error occurs while processing the request. May be `NULL`.

<a id="return-value"></a>

## Return Value

The downloaded data for the URL request. Returns `nil` if a connection could not be created or if the download fails.

<a id="Discussion"></a>

## Discussion

A synchronous load is built on top of the asynchronous loading code made available by the class. The calling thread is blocked while the asynchronous loading system performs the URL load on a thread spawned specifically for this load request. No special threading or run loop configuration is necessary in the calling thread in order to perform a synchronous load.

> **Important**

>  Because this call can potentially take several minutes to complete (particularly when using a cellular network in iOS), you should never call this function from the main thread of your application. Doing so may cause a `0x8badf00d` exception with the main thread at `mach_msg_trap`. The solution is to migrate to URL loading using [NSURLSession](../urlsession.md).

If authentication is required in order to download the request, the required credentials must be specified as part of the URL. If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
