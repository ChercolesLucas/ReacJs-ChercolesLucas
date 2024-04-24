import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia sx={{ height: 250 }} image={img} title="" />

      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          $ {price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="medium">Ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
