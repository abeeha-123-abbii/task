let marks;

for(i=0 ; i<=5 ; i++)
{
    marks= prompt("Enter the marks of your "+ i +" subjects");

if(marks <=100 && marks>=80)
    {
        alert("Congragulations your grade according to your marks is A");
    }
else if(marks <=80 && marks>=60)
    {
        alert("Congragulations your grade according to your marksis B");
    }
else if(marks <=60 && marks>=40)
    {
        alert("Your grade according to your marks is C");
    }
else if(marks <=40 && marks>=30)
    {
        alert("Your grade according to your marks is D");
    }
else
    {
        alert("Your grade according to your marks is F");
    }

}


