> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/property-path--greater-than](https://developer.apple.com/documentation/tvml/property-path--greater-than)

# {property-path}-greater-than

**Kind:** Article

Compares a value from a JSON file to a specified value to find out if the JSON value is greater than the specified value.

<a id="Overview"></a>

## Overview

The `{property-path}-greater-than` query is used with data binding to determine whether one value is larger than another. Bind a value from your JSON file to a variable associated with the query. If the `property-path` is greater than the designated value, the element is processed.

For example, you want to notify a user that a movie has at least 24 hours left in the rental period. Add a `specialize` element that contains a `{property-path}-greater-than` query. If the `hoursLeft` variable is greater than 24, color the title white.

```xml
<specialize state="({hoursLeft}-greater-than:24)">
    <title tag="title" style="color:white"/>
</specialize>
```
