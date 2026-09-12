> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/traits](https://developer.apple.com/documentation/testing/traits)

# Traits

**Framework:** Swift Testing  
**Kind:** API Collection

Annotate test functions and suites, and customize their behavior.

<a id="Overview"></a>

## Overview

Pass built-in traits to test functions or suite types to comment, categorize, classify, and modify the runtime behavior of test suites and test functions. Implement the [TestTrait](testtrait.md), and [SuiteTrait](suitetrait.md) protocols to create your own types that customize the behavior of your tests.

## Topics

### Customizing runtime behaviors

- [Enabling and disabling tests](enablinganddisabling.md): Conditionally enable or disable individual tests before they run.
- [Limiting the running time of tests](limitingexecutiontime.md): Set limits on how long a test can run for until it fails.
- [enabled(if:\_:sourceLocation:)](trait/enabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [enabled(\_:sourceLocation:\_:)](trait/enabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [disabled(\_:sourceLocation:)](trait/disabled%28__sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test unconditionally.
- [disabled(if:\_:sourceLocation:)](trait/disabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [disabled(\_:sourceLocation:\_:)](trait/disabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [timeLimit(\_:)](trait/timelimit%28__%29.md): Conforms when `Self` is `TimeLimitTrait`. Construct a time limit trait that causes a test to time out if it runs for too long.

### Running tests serially or in parallel

- [Running tests serially or in parallel](parallelization.md): Control whether tests run serially or in parallel.
- [serialized](trait/serialized.md): Conforms when `Self` is `ParallelizationTrait`. A trait that serializes the test to which it is applied.

### Annotating tests

- [Adding tags to tests](addingtags.md): Use tags to provide semantic information for organization, filtering, and customizing appearances.
- [Adding comments to tests](addingcomments.md): Add comments to provide useful information about tests.
- [Associating bugs with tests](associatingbugs.md): Associate bugs uncovered or verified by tests.
- [Interpreting bug identifiers](bugidentifiers.md): Examine how the testing library interprets bug identifiers provided by developers.
- [Tag()](tag%28%29.md): Declare a tag that can be applied to a test function or test suite.
- [bug(\_:\_:)](trait/bug%28____%29.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-10yf5.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-3vtpl.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.

### Handling issues

- [compactMapIssues(\_:)](trait/compactmapissues%28__%29.md): Conforms when `Self` is `IssueHandlingTrait`. Constructs an trait that transforms issues recorded by a test.
- [filterIssues(\_:)](trait/filterissues%28__%29.md): Conforms when `Self` is `IssueHandlingTrait`. Constructs a trait that filters issues recorded by a test.

### Creating custom traits

- [Trait](trait.md): A protocol describing traits that can be added to a test function or to a test suite.
- [TestTrait](testtrait.md): A protocol describing a trait that you can add to a test function.
- [SuiteTrait](suitetrait.md): A protocol describing a trait that you can add to a test suite.
- [TestScoping](testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.

### Supporting types

- [Bug](bug.md): A type that represents a bug report tracked by a test.
- [Comment](comment.md): A type that represents a comment related to a test.
- [ConditionTrait](conditiontrait.md): A type that defines a condition which must be satisfied for the testing library to enable a test.
- [IssueHandlingTrait](issuehandlingtrait.md): A type that allows transforming or filtering the issues recorded by a test.
- [ParallelizationTrait](parallelizationtrait.md): A type that defines whether the testing library runs this test serially or in parallel.
- [Tag](tag.md): A type representing a tag that can be applied to a test.
- [Tag.List](tag/list.md): A type representing one or more tags applied to a test.
- [TimeLimitTrait](timelimittrait.md): A type that defines a time limit to apply to a test.
